"use client"
import styles from './index.module.css';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Button from '@/component/Button';
import LoginPopup from '@/component/LoginPopup';
import UserDropdown from './UserDropdown';
import { getCookie } from 'cookies-next/client';

const Navigation = () => {
    const [background, setBackground] = useState(false); 
    const [mobile_opened, setMobile_opened] = useState(false);
    const [loginOpened, setLoginOpened] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(null);
    const [userinfo, setUserinfo] = useState({});
    const path = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const backgroundStyle = {
        backgroundColor: 'var(--color-white)',
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1'
    }
    const openLogin = () => setLoginOpened(true);
    const checkAuth = () => {
        if(getCookie('refresh_token') !== undefined) {
            setIsAuthorized(true);
            setUserinfo(JSON.parse(localStorage?.getItem('user_info')));
            console.log('인증 성공');
        }
        else {
            setIsAuthorized(false);
            console.log('인증 실패');
        } //인증 상태 검사 
    }
    useEffect(() => {
        const loginOpen=searchParams.get('loginOpen')??false;
        if(loginOpen) {
            setLoginOpened(true);
            router.push('/');
        }
    }, [searchParams]);
    useEffect(() => {
        checkAuth();
    }, [path]);
    useEffect(() => {
        const handleScroll = () => { // 스크롤 관련 이벤트
            const currentScrollY = window.scrollY;
            if(currentScrollY>0) setBackground(true);
            else setBackground(false);
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeNavbar = () => {
        setMobile_opened(false);
    }

    return (
        <Suspense>
            <div style={background ? backgroundStyle : null} className={`${styles.container} ${mobile_opened ? styles.opened : null}`}>
                { mobile_opened ? <div onClick={() => setMobile_opened((prev)=>!prev)} className={styles.mobile_background}></div> : null}
                <div className={styles.mobile_navbar}>
                    <Link href="/"><img onClick={closeNavbar} className={styles.logo} src="/images/logo.png" /></Link>
                    <div
                        className={`${styles.menu_btn} ${mobile_opened ? styles.opened : null}`} 
                        onClick={() => setMobile_opened((prev)=>!prev)}
                    >
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </div>
                </div>
                <div className={styles.leftarea}>
                    <Link href="/"><img className={styles.logo} src="/images/logo.png" /></Link>
                    <ul className={styles.navlist}>
                        <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/timetable/create/survey"><li className={path.startsWith('/timetable/create')?styles.active:null}>시간표짜기</li></Link>
                        <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/lecture?keyword="><li className={path.startsWith('/lecture')?styles.active:null}>강의후기</li></Link>
                        <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/graduation"><li className={path.startsWith('/graduation')?styles.active:null}>졸업요건분석</li></Link>
                    </ul>
                </div>
                <div className={styles.rightarea}>
                    { isAuthorized===null ? null : isAuthorized ?
                        <UserDropdown
                            closeNavbar={closeNavbar}
                            userid={userinfo?.id}
                            username={userinfo?.name}
                            checkAuth={checkAuth}
                        /> :
                        <Button 
                            size="small"
                            onClick={openLogin}
                        >
                            로그인
                        </Button>
                    }
                </div>
                <LoginPopup opened={loginOpened} setOpened={setLoginOpened} setIsAuthorized={setIsAuthorized} setUserinfo={setUserinfo}/>
            </div>
        </Suspense>
        
    );
}

export default Navigation;
"use client"
import styles from './index.module.css';
import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@/component/Button';
import LoginPopup from '@/component/LoginPopup';
import UserDropdown from './UserDropdown';
import { getCookie } from 'cookies-next/client';

const Navigation = () => {
    const path = usePathname();
    const [background, setBackground] = useState(false); 
    const [mobile_opened, setMobile_opened] = useState(false);
    const [loginOpened, setLoginOpened] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(null);
    const [userinfo, setUserinfo] = useState(null);
    
    const backgroundStyle = {
        backgroundColor: 'var(--color-white)',
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1'
    }
    const openLogin = () => setLoginOpened(true);

    const getUserInfo = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user_info`);
        const result = await response.json();
        console.log(result);
    }; // 유저 정보 불러오기 -> api 수정 필요!

    useEffect(() => {
        if(getCookie('access_token') !== undefined && getCookie('refresh_token') !== undefined) {
            setIsAuthorized(true);
        }
        else {
            setIsAuthorized(false);
        } //인증 상태 검사 

        const handleScroll = () => { // 스크롤 관련 이벤트
            const currentScrollY = window.scrollY;
            if(currentScrollY>0) setBackground(true);
            else setBackground(false);
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={background ? backgroundStyle : null} className={`${styles.container} ${mobile_opened ? styles.opened : null}`}>
            { mobile_opened ? <div onClick={() => setMobile_opened((prev)=>!prev)} className={styles.mobile_background}></div> : null}
            <div className={styles.mobile_navbar}>
                <Link href="/"><img className={styles.logo} src="/images/logo.png" /></Link>
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
                    <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/lecture"><li className={path.startsWith('/lecture')?styles.active:null}>강의후기</li></Link>
                    <Link onClick={() => setMobile_opened((prev)=>!prev)} href="/graduation"><li className={path.startsWith('/graduation')?styles.active:null}>졸업요건분석</li></Link>
                </ul>
            </div>
            <div className={styles.rightarea}>
            <Suspense fallback={<div>loading...</div>}>
                { isAuthorized===null ? null : isAuthorized ?
                    <UserDropdown
                        setBackground={setBackground}
                    /> :
                    <Button 
                        size="small"
                        onClick={openLogin}
                    >
                        로그인
                    </Button>
                }
            </Suspense>
                
            </div>
            <LoginPopup opened={loginOpened} setOpened={setLoginOpened}/>
        </div>
    );
}

export default Navigation;
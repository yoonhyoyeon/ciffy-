"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/component/Button';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

const Navigation = () => {
    const path = usePathname();
    const [background, setBackground] = useState(false); 
    const [mobile_opened, setMobile_opened] = useState(false);
    const backgroundStyle = {
        backgroundColor: 'var(--color-white)',
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1'
    }
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if(currentScrollY>0) setBackground(true);
            else setBackground(false)
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <div style={background ? backgroundStyle : null} className={`${styles.container} ${mobile_opened ? styles.opened : null}`}>
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
                <Button size="small" customStyles={{color: "var(--color-blue-3)", backgroundColor: "var(--color-opacity-0)"}}>로그인</Button>
                <Button size="small" >회원가입</Button>
            </div>
        </div>
    );
}

export default Navigation;
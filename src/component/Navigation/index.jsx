"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/component/Button';
import styles from './index.module.css';

const Navigation = () => {
    const path = usePathname();
    return (
        <div className={styles.container}>
            <div className={styles.leftarea}>
                <Link href="/"><img className={styles.logo} src="/images/logo.png" /></Link>
                <ul className={styles.navlist}>
                    <Link href="/timetable/create"><li className={path==='/timetable/create'?styles.active:null}>시간표짜기</li></Link>
                    <Link href="/lecture"><li className={path==='/lecture'?styles.active:null}>강의후기</li></Link>
                    <Link href="/lecture/analysis"><li className={path==='/lecture/analysis'?styles.active:null}>강의분석</li></Link>
                    <Link href="/graduation"><li className={path==='/graduation'?styles.active:null}>졸업요건분석</li></Link>
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
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/component/Button';
import styles from './index.module.css';

const Navigation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftarea}>
                <Link href="/"><img className={styles.logo} src="/images/logo.png" /></Link>
                <ul className={styles.navlist}>
                    <Link href="/timetable"><li>시간표짜기</li></Link>
                    <Link href="/lecture"><li>강의후기</li></Link>
                    <Link href="/lecture"><li>강의분석</li></Link>
                    <Link href="/graduation"><li>졸업요건분석</li></Link>
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
import Button from "@/component/Button";
import styles from './index.module.css';
import Link from 'next/link';

const Home = () => {
    return (
    <div className={styles.container}>
        <div className={styles.contents}>
            <h2>귀찮았던 시간표 짜기는 이제 안녕</h2>
            <h1>시간표의 새 패러다임, <span>시피</span>를 소개합니다</h1>
            <img src="/images/timetable.png" />
            <Link href="/timetable/create">
                <Button size="large">시간표 짜기</Button>
            </Link>
        </div>
    </div>
    );
};

export default Home;
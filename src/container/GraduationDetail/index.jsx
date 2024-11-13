import Table from '@/component/Table';
import styles from './index.module.css';
import Link from 'next/link';

const GraduationDetail = ({title}) => {
    const data = [
        {
            code: 9489,
            name: '세계사:인간과문명',
            type: '교선',
            sector: '사상과 역사',
            credit: 3,
            checked: true
        },
        {
            code: 9790,
            name: '고급프로그래밍입문-P',
            type: '교선1',
            sector: '자연과과학기술',
            credit: 3,
            checked: true
        },
        {
            code: 9936,
            name: 'Technical Writing기초',
            type: '교선',
            sector: '자연과과학기술',
            credit: 2,
            checked: false
        },
    ]
    return (
        <div className={styles.container}>
            <Link href="/graduation"><img className={styles.close_btn} src="/images/x-icon.png" /></Link>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.table_title}>필수과목</h2>
            <Table data={data} />
            <h2 className={styles.table_title}>필수과목 추천</h2>
            <Table data={data} />
            <h2 className={styles.table_title}>추천과목</h2>
            <Table data={data} />
        </div>
    );
}

export default GraduationDetail;
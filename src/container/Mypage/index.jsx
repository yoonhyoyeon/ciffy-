"use client";
import styles from './index.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import WhenInput from '@/component/WhenInput';
import UserInfo from '@/component/UserInfo';
import MypageTable from '@/component/MypageTable';
import TimetableList from './TimetableList'
import { timetableList } from '@/constants'

const Mypage = ({takedLectures}) => {
    const [ when, setWhen ] = useState('');
    const data = [
        {
            year: 2024,
            term: '1학기',
            code: 9489,
            name: '세계사:인간과문명',
            type: '교선',
            sector: '사상과 역사',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9790,
            name: '고급프로그래밍입문-P',
            type: '교선1',
            sector: '자연과과학기술',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9936,
            name: 'Technical Writing기초',
            type: '교선',
            sector: '자연과과학기술',
            credit: 2,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9489,
            name: '세계사:인간과문명',
            type: '교선',
            sector: '사상과 역사',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9790,
            name: '고급프로그래밍입문-P',
            type: '교선1',
            sector: '자연과과학기술',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9936,
            name: 'Technical Writing기초',
            type: '교선',
            sector: '자연과과학기술',
            credit: 2,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9489,
            name: '세계사:인간과문명',
            type: '교선',
            sector: '사상과 역사',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9790,
            name: '고급프로그래밍입문-P',
            type: '교선1',
            sector: '자연과과학기술',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9936,
            name: 'Technical Writing기초',
            type: '교선',
            sector: '자연과과학기술',
            credit: 2,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9489,
            name: '세계사:인간과문명',
            type: '교선',
            sector: '사상과 역사',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9790,
            name: '고급프로그래밍입문-P',
            type: '교선1',
            sector: '자연과과학기술',
            credit: 3,
        },
        {
            year: 2024,
            term: '1학기',
            code: 9936,
            name: 'Technical Writing기초',
            type: '교선',
            sector: '자연과과학기술',
            credit: 2,
        },
    ]
    const [ userinfo, setUserinfo ] = useState({});
    useEffect(() => {
        setUserinfo(JSON.parse(localStorage?.getItem('user_info')));
    }, [])
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>마이페이지</h1>
            <div className={styles.timetable_controller}>
                <span>저장된 시간표</span>
                <WhenInput when={when} setWhen={setWhen}/>
            </div>
            <div className={styles.contents_wrap}>
                <div className={styles.left_area}>
                    <UserInfo userinfo={userinfo}/>
                    <h2 className={styles.contents_name}>내 기이수 과목</h2>
                    <MypageTable takedLectures={takedLectures}/>
                </div>
                <div className={styles.right_area}>
                    <div className={styles.cover}></div>
                    <TimetableList timetables={timetableList} />
                </div>
            </div>
        </div>
    );
}

export default Mypage;
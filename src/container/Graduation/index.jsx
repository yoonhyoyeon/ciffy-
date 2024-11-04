"use client"
import styles from './index.module.css';
import GraduationProgressbar from '@/component/GraduationProgressbar';
import { CircularProgressbar, buildStyles } from '@/component/CircularProgressbar';
import '@/component/CircularProgressbar/styles.css';
import { useEffect, useState } from 'react';
import TotalGraduate from '@/component/TotalGraduate';

const Graduation = () => {
    const [value, setValue] = useState(0);
    
    const data = [
        {
            title: '전체',
            data: 94,
            max: 140
        },
        {
            title: '전공 필수',
            data: 23,
            max: 33
        },
        {
            title: '전공 선택',
            data: 24,
            max: 39
        },
        {
            title: '교양 선택',
            data: 15,
            max: 21
        },
        {
            title: '공통 교향 필수',
            data: 6,
            max: 8
        },
        {
            title: '학문 기초 교양 필수',
            data: 3,
            max: 3
        },
        {
            title: '영어 졸업 인증',
            data: -1,
            max: 0,
        },
        {
            title: 'sex',
            data: -1,
            max: 0,
        },
    ];
    return (
        <div className={styles.container}>
            <h1>졸업요건 분석</h1>
            <TotalGraduate data={94} max={140} />
            { data.map((v, i) => <GraduationProgressbar data={v} key={i} />) }
        </div>
    );
}

export default Graduation;
"use client"
import styles from './index.module.css';
import GraduationProgressbar from '@/component/GraduationProgressbar';
import { CircularProgressbar, buildStyles } from '@/component/CircularProgressbar';
import '@/component/CircularProgressbar/styles.css';
import { useEffect, useState } from 'react';

const Graduation = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(66);
    }, [])
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
            max: 21,
            required: false,
        }
    ];
    return (
        <div>
            <h1>졸업요건 분석</h1>
            <div style={{ width: 300, height: 300 }}>
                <CircularProgressbar strokeWidth={6.5} value={value} text={value+'%'}styles={buildStyles({ pathTransitionDuration: 1})}>
                </CircularProgressbar>
            </div>
            
            { data.map((v, i) => <GraduationProgressbar data={v} key={i} />) }
        </div>
    );
}

export default Graduation;
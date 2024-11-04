"use client"

import styles from './index.module.css';
import { CircularProgressbar, buildStyles } from '@/component/CircularProgressbar';
import '@/component/CircularProgressbar/styles.css';
import Button from '@/component/Button';
import { useRef, useEffect } from 'react';

const TotalGraduate = ({data, max}) => {
    const value = useRef(0);
    useEffect(() => {
        value.current = Math.floor(data/max*100);
    }, []);
    return (
        <div>
            <div>
                <div>
                    <h1>전체</h1>
                    <div>총 기준 학점 <span>{data}</span></div>
                    <div>총 이수 학점 <span>{max}</span></div>
                    <Button size="large">기이수 성적표 업로드</Button>
                </div>
                <div style={{ width: 300, height: 300 }}>
                    <CircularProgressbar strokeWidth={6.5} value={value.current} text={value.current+'%'}styles={buildStyles({ pathTransitionDuration: 1})}>
                    </CircularProgressbar>
                </div>
            </div>
        </div>
    );
}

export default TotalGraduate;
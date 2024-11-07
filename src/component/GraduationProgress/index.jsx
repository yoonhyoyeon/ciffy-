"use client"
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { GraduationTitle } from '@/constants';

const GraduationProgress = ({data}) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(data.data/data.max*100);
    }, []);
    return (
        <div className={styles.container}>
            <span className={styles.title}>{GraduationTitle[data.id]}</span>
            <span className={styles.contents}>{data.max!==-1 ? `${data.data} / ${data.max}` : (data.data===0 ? 'NP':'P')}</span>
            <div className={styles.progress_wrap}>
                <span className={styles.text}><CountUp end={Math.round(data.data/data.max*100)} />%</span>
                <div className={styles.progress_bg}><div className={styles.progress_bar} style={{width: progress+'%'}}></div></div>
            </div>
        </div>
    )
}

export default GraduationProgress;
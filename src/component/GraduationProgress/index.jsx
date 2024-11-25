"use client"
import styles from './index.module.css';
import CountUp from 'react-countup';
import { GraduationTitle } from '@/constants';
import ProgressBar from '../ProgressBar';

const GraduationProgress = ({data, barColor='var(--color-blue-1)'}) => {
    
    return (
        <div className={styles.container}>
            <span className={styles.title}>{GraduationTitle[data.id]}</span>
            <span className={styles.contents} style={{color: barColor}}>{data.max!==-1 ? `${data.data} / ${data.max}` : (data.data===0 ? 'NP':'P')}</span>
            <div className={styles.progress_wrap}>
                <span className={styles.text} style={{color: barColor}}><CountUp end={Math.round(data.data/data.max*100)} />%</span>
                <ProgressBar data={data.data} max={data.max} barColor={barColor}/>
            </div>
        </div>
    )
}

export default GraduationProgress;
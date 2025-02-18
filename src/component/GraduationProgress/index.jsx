"use client"
import styles from './index.module.css';
import CountUp from 'react-countup';
import { GraduationTitle } from '@/constants';
import ProgressBar from '../ProgressBar';

const GraduationProgress = ({prev_data, data, barColor='var(--color-blue-1)'}) => {
    
    return (
        <div className={styles.container}>
            <span className={styles.title}>{GraduationTitle[data.id]}</span>
            <span className={styles.contents} style={{color: barColor}}>{prev_data ? <span className={styles.gray_txt}>{prev_data} -&gt; </span> : null} {data.max!==-1 ? `${data.data} / ${data.max}` : (data.data===0 ? 'NP':'P')}</span>
            <div className={styles.progress_wrap}>
                <span className={styles.text} style={{color: barColor}}> {prev_data? <CountUp end={Math.round(prev_data/data.max*100)} /> : null} {prev_data ? '->' : null} <CountUp end={Math.round(data.data/data.max*100)} />%</span>
                <ProgressBar data={data.data} max={data.max} barColor={barColor}/>
            </div>
        </div>
    )
}

export default GraduationProgress;
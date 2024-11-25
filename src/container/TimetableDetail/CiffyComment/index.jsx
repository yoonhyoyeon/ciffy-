"use client";
import styles from './index.module.css';
import { CircularProgressbarWithChildren, buildStyles } from '@/component/CircularProgressbar';
import '@/component/CircularProgressbar/styles.css';
import CountUp from 'react-countup';
const CiffyComment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <img src="/images/ciffy.svg" />
                    <span>시피의 한줄평</span>
                </div>
                <p>팀플이 적고, 과제가 적은 전공 필수 과목이 많은 시간표입니다.</p>
            </div>
            <div className={styles.right}>
                <CircularProgressbarWithChildren strokeWidth={8} value={63} styles={buildStyles({ pathTransitionDuration: 1})}>
                    <div className={styles.txt_wrap}>
                        <span className={styles.txt}>시피 추천지수</span>
                        <span className={styles.percent}>
                            <CountUp className={styles.CountUp} end={63} duration={1}/><span>%</span>
                        </span>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}

export default CiffyComment;
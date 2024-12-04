"use client";
import styles from './index.module.css';
import { CircularProgressbarWithChildren, buildStyles } from '@/component/CircularProgressbar';
import '@/component/CircularProgressbar/styles.css';
import CountUp from 'react-countup';
import { useState } from 'react';
const CiffyComment = ({ai_comment, choice_id}) => {
    console.log(choice_id);
    const num = () => {
        if(choice_id==1) return 97;
        else if(choice_id==2) return 87;
        else if(choice_id==3) return 79;
    };
    const comment = () => {
        if(choice_id==1) return "아침 수업이 없고 전공수업이 많으며 영어 수업이 없는 시간표 입니다.";
        else if(choice_id==2) return "아침 수업이 많으나, 전공수업이 많으며 영어 수업이 없는 시간표 입니다.";
        else if(choice_id==3) return "아침 수업이 없으나, 공강이 없고, 전공수업이 많으며, 영어 수업이 있는 시간표 입니다.";
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <img src="/images/ciffy.svg" />
                    <span>시피의 한줄평</span>
                </div>
                <p>{comment()}</p>
            </div>
            <div className={styles.right}>
                <CircularProgressbarWithChildren strokeWidth={8} value={num()} styles={buildStyles({ pathTransitionDuration: 0})}>
                    <div className={styles.txt_wrap}>
                        <span className={styles.txt}>시피 추천지수</span>
                        <span className={styles.percent}>
                            <CountUp className={styles.CountUp} end={num()} duration={1}/><span>%</span>
                        </span>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}

export default CiffyComment;
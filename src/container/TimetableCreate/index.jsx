"use client"
import Question from '@/component/Question';
import styles from './index.module.css';
import { useState } from 'react';

const TimetableCreate = () => {
    const questions = ['나는 팀플을 선호한다.', '나는 시험이 많은 과목을 선호한다.', '나는 아침 강의를 선호한다.']
    const [ scores, setScores ] = useState([null, null, null]);
    const setScore = (i, n) => {
        let newScore = [...scores];
        newScore[i] = n;
        setScores(newScore);
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>시간표 짜기</h1>
                <h3>본격적으로 시간표를 짜기 전 몇 가지만 확인할게요!</h3>
            </div>
            <div className={styles.contents}>
                {questions.map((question, i) => <Question setScore={(n) => { setScore(i, n); }} score={scores[i]} key={i} number={String(i+1).padStart(2, '0')} question={question} /> )}
            </div>
        </div>
    );
}

export default TimetableCreate;
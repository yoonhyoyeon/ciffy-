"use client"
import Question from '@/component/Question';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

const TimetableCreate = () => {
    const questions = ['나는 팀플을 선호한다.', '나는 시험이 많은 과목을 선호한다.', '시험보단 과제로 평가가 되었으면 좋겠다.', '성적을 채워주시는 교수님이 좋다.', '시험은 적을수록 좋다.', '출결을 호명하지 않는 수업이 좋다.', '영어 수업을 선호한다.', '후기가 많은 과목이 좋다.' ,'졸업을 위한 필수 과목이 많았으면 좋겠다.', '교양이 많았으면 좋겠다.', '시험이 어려운 수업이 좋다.']
    const [ scores, setScores ] = useState([]);
    useEffect(() => {
        const init_scores=[];
        questions.filter(() => init_scores.push(null));
        setScores(init_scores);
    }, []);
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
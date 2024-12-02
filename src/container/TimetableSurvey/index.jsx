"use client"
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import Button from '@/component/Button';
import Question from '@/component/Question';
import { SURVEY_QUESTON, LAODING_MESSAGE } from '@/constants';
import { rand, sleep } from '@/utils';
import { submitQuestion } from '@/service';
import { useRouter } from 'next/navigation';

const TimetableSurvey = () => {
    const [ scores, setScores ] = useState([]);
    const [ userinfo, setUserinfo ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ loading_state, setLoading_state ] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const init_scores=[];
        SURVEY_QUESTON.filter(() => init_scores.push(0));
        setScores(init_scores);
        setUserinfo(JSON.parse(localStorage?.getItem('user_info')));
    }, []);

    useEffect(() => {
        if(loading_state > 4) router.push('/timetable/create/select');
    })

    const startLoading = () => {
        const timer = setTimeout(() => {
            setLoading_state((prev) => prev+1);
            if(loading_state>4) clearTimeout(timer);
            startLoading();
        }, rand(600, 3500));
    }
    const setScore = (i, n) => {
        let newScore = [...scores];
        newScore[i] = n;
        setScores(newScore);
    }
    const submit = async () => {
        const result = await submitQuestion(userinfo.id, scores);
        console.log(result);
        if(result) {
            setLoading(true);
            startLoading();
        }
    }
    return (
        <div className={styles.container}>
            {
                //loading
                loading ?
                <div className={styles.loading}>
                    <img src="/images/timetable-loading.gif" />
                    <h1>시피가 열심히 시간표를 만들고있어요!</h1>
                    <h2>{LAODING_MESSAGE[loading_state]}</h2>
                </div> : null
            }
            
            { 
                //header
                !loading ? 
                    <div className={styles.header}>
                        <h1>시간표 짜기</h1>
                        <h3>본격적으로 시간표를 짜기 전 몇 가지만 확인할게요!</h3>
                    </div> : null
                }
            {
                //contents
                !loading ?
                <div className={styles.contents}>
                    {SURVEY_QUESTON.map((question, i) => 
                        <Question 
                            setScore={(n) => { setScore(i, n); }} 
                            score={scores[i]} 
                            key={i} 
                            number={String(i+1).padStart(2, '0')} 
                            question={question} 
                        /> 
                    )}
                    <Button 
                        size="small" 
                        customStyles={{padding: '10px 50px', fontSize: '16px'}} 
                        onClick={submit}
                        disabled={!(scores.indexOf(0)===-1)}
                    >설문 제출</Button>
                </div> : null
            }
            
        </div>
    );
}

export default TimetableSurvey;
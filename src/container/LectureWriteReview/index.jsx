"use client";

import { useState } from 'react';
import styles from './index.module.css';
import Button from '@/component/Button';
import RatingInput from './RatingInput';
import WhenInput from './WhenInput';
import CheckboxInput from './CheckboxInput';

const LectureWriteReview = ({data, id}) => {
    const [rating, setRating] = useState(0);
    const [when, setWhen] = useState('');
    const [assignment, setAssignment] = useState(-1);
    const [team, setTeam] = useState(-1);
    const [grade, setGrade] = useState(-1);
    const [contents, setContents] = useState('');
    const isComplete = rating!==0 && when !== '' && assignment !== -1 && team !== -1 && grade !== -1 && contents !== '';
    return (
        <div className={styles.container}>
            <img onClick={() => history.back()} className={styles.close_btn} src="/images/x-icon.png" />
            <div className={styles.title_wrap}>
                <span className={styles.name}>{data.name}</span>
                <span className={styles.professor}>{data.professor}</span>
            </div>
            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.title}>별점</span>
                    <RatingInput 
                        rating={rating} 
                        setRating={setRating} 
                    />
                </div>
                <div className={styles.item}>
                    <span className={styles.title}>학기</span>
                    <WhenInput 
                        when={when} 
                        setWhen={setWhen} 
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.item}>
                    <span className={styles.title}>과제</span>
                    <CheckboxInput 
                        data={assignment} 
                        setData={setAssignment}
                        field={['없음', '보통', '많음']}
                    />
                </div>
                <div className={styles.item}>
                    <span className={styles.title}>조모임</span>
                    <CheckboxInput 
                        data={team} 
                        setData={setTeam}
                        field={['없음', '보통', '많음']}
                    />
                </div>
                <div className={styles.item}>
                    <span className={styles.title}>성적</span>
                    <CheckboxInput 
                        data={grade} 
                        setData={setGrade}
                        field={['너그러움', '보통', '깐깐함']}
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.item}>
                    <h3 className={styles.title}>후기</h3>
                    <textarea 
                        placeholder="후기를 작성해주세요."
                        className={styles.contents_input}
                        value={contents}
                        onChange={(e) => {
                            setContents(e.target.value);
                        }}
                    ></textarea>
                </div>
            </div>
            <div><Button size="small" disabled={!isComplete}>후기 작성하기</Button></div>
        </div>
    );
}

export default LectureWriteReview;
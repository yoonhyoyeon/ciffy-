"use client";

import { useState } from 'react';
import styles from './index.module.css';
import Button from '@/component/Button';
import RatingInput from './RatingInput';
import CheckboxInput from './CheckboxInput';
import { addLectureReview } from '@/service';

const LectureWriteReview = ({data, id}) => {
    const [rating, setRating] = useState(0);
    const [assignment, setAssignment] = useState(-1);
    const [team, setTeam] = useState(-1);
    const [grade, setGrade] = useState(-1);
    const [contents, setContents] = useState('');
    const isComplete = rating!==0 && assignment !== -1 && team !== -1 && grade !== -1 && contents !== '';

    const submit = () => {
        addLectureReview(id, "21011189", contents, rating, assignment, team, grade);
    }
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
                        field={['깐깐함', '보통', '너그러움']}
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
            <div><Button 
                size="small" 
                disabled={!isComplete}
                onClick={submit}
            >후기 작성하기</Button></div>
        </div>
    );
}

export default LectureWriteReview;
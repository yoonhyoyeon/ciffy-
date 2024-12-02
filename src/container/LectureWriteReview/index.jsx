"use client";

import { useState } from 'react';
import styles from './index.module.css';
import Button from '@/component/Button';
import RatingInput from './RatingInput';
import CheckboxInput from '@/container/LectureWriteReview/CheckboxInput';
import { addLectureReview } from '@/service';
import { useRouter, useSearchParams } from 'next/navigation';
import { ASSIGNMENT_FIELD, TEAM_FIELD, GRADE_FIELD } from '@/constants';

const LectureWriteReview = ({id}) => {
    const [rating, setRating] = useState(0);
    const [assignment, setAssignment] = useState(-1);
    const [team, setTeam] = useState(-1);
    const [grade, setGrade] = useState(-1);
    const [contents, setContents] = useState('');
    const router = useRouter();
    const params = useSearchParams();
    const isComplete = rating!==0 && assignment !== -1 && team !== -1 && grade !== -1 && contents !== '';

    const submit = async() => {
        const result = await addLectureReview(id, "21011189", contents, rating, assignment, team, grade);

        router.replace(`/lecture/detail/${id}?name=${params.get('name')}&professor=${params.get('professor')}`);
    }
    return (
        <div className={styles.container}>
            <img onClick={() => history.back()} className={styles.close_btn} src="/images/x-icon.png" />
            <div className={styles.title_wrap}>
                <span className={styles.name}>{params.get('name')}</span>
                <span className={styles.professor}>{params.get('professor')}</span>
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
                        field={ASSIGNMENT_FIELD}
                    />
                </div>
                <div className={styles.item}>
                    <span className={styles.title}>조모임</span>
                    <CheckboxInput 
                        data={team} 
                        setData={setTeam}
                        field={TEAM_FIELD}
                    />
                </div>
                <div className={styles.item}>
                    <span className={styles.title}>성적</span>
                    <CheckboxInput 
                        data={grade} 
                        setData={setGrade}
                        field={GRADE_FIELD}
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
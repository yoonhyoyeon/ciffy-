"use client";

import styles from './index.module.css';
import LectureInfo from './LectureInfo';
import LectureReview from './LectureReview';

const LectureDetail = ({data}) => {
    return (
        <div className={styles.container}>
            <img onClick={() => history.back()} className={styles.close_btn} src="/images/x-icon.png" />
            <h1 class={styles.title}>강의 정보</h1>
            <div class={styles.contents_wrap}>
                <LectureInfo 
                    name={data.name}
                    professor={data.professor}
                    review_cnt={data.review_cnt}
                    rating={data.rating}
                    assignment={data.assignment}
                    team={data.team}
                    grade={data.grade}
                />
                <LectureReview review={data.review} />
            </div>
        </div>
    );
}

export default LectureDetail;
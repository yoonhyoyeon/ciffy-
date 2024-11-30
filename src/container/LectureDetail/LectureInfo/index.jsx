import styles from './index.module.css';
import LectureRating from './LectureRating';
import LectureFeature from './LectureFeature';
import { countReviewValues } from '@/utils';

//<div className={styles.off}><div style={{width: rating/5*100+'%'}}className={styles.on}></div></div>

const LectureInfo = ({name, professor, reviews}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title_wrap}>
                <span className={styles.name}>{name}</span>
                <span className={styles.professor}>{professor}</span>
            </div>
            <LectureRating 
                review_cnt={reviews.length} 
                rating={countReviewValues("rating", reviews, 5)}
            />
            <LectureFeature 
                review_cnt={reviews.length}
                assignment={countReviewValues("assignment", reviews, 3)}
            />
            <LectureFeature 
                review_cnt={reviews.length}
                team={countReviewValues("group_work", reviews, 3)}
            />
            <LectureFeature 
                review_cnt={reviews.length}
                grade={countReviewValues("grading", reviews, 3)}
            />
        </div>
    );
}

export default LectureInfo;
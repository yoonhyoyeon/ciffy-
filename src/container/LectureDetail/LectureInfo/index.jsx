import styles from './index.module.css';
import LectureRating from './LectureRating';
import LectureFeature from './LectureFeature';


//<div className={styles.off}><div style={{width: rating/5*100+'%'}}className={styles.on}></div></div>

const LectureInfo = ({name, professor, review_cnt, rating, assignment, team, grade}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title_wrap}>
                <span className={styles.name}>{name}</span>
                <span className={styles.professor}>{professor}</span>
            </div>
            <LectureRating 
                review_cnt={review_cnt} 
                rating={rating}
            />
            <LectureFeature 
                review_cnt={review_cnt}
                assignment={assignment}
            />
            <LectureFeature 
                review_cnt={review_cnt}
                team={team}
            />
            <LectureFeature 
                review_cnt={review_cnt}
                grade={grade}
            />
        </div>
    );
}

export default LectureInfo;
import styles from './index.module.css';

const LectureReviewItem = ({ rating, when, contents }) => {
    return (
        <div className={styles.LectureReviewItem}>
            <div className={styles.top}>
                <div className={styles.off}><div style={{width: rating/5*100+'%'}}className={styles.on}></div></div>
                <span>{when}</span>
            </div>
            <div className={styles.bottom}>
                {contents}
            </div>
        </div>
    );
}

export default LectureReviewItem;
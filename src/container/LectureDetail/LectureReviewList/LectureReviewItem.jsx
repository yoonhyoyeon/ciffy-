import styles from './index.module.css';

const LectureReviewItem = ({ rating, contents, assignment, team, grade }) => {
    const assignment_field = ['없음', '보통', '많음'];
    const team_field = ['없음', '보통', '많음'];
    const grade_field = ['너그러움', '보통', '깐깐함'];
    return (
        <div className={styles.LectureReviewItem}>
            <div className={styles.top}>
                <div className={styles.rating_wrap}>
                    <div className={styles.off}>
                        <div style={{width: rating/5*100+'%'}}className={styles.on}></div>
                    </div>
                    <span>{rating}점</span>
                </div>
                <div className={styles.add_info}>
                    <div className={styles.info_name}>과제:</div>
                    <span>{assignment_field[parseInt(assignment)-1]}</span>
                    <div className={styles.info_name}>조모임:</div>
                    <span>{team_field[parseInt(team)-1]}</span>
                    <div className={styles.info_name}>성적:</div>
                    <span>{grade_field[parseInt(grade)-1]}</span>
                </div>
            </div>
            <div className={styles.bottom}>
                {contents}
            </div>
        </div>
    );
}

export default LectureReviewItem;
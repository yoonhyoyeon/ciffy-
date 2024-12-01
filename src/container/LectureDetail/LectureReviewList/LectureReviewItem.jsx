import styles from './index.module.css';
import { assignment_field, team_field, grade_field } from '@/constants';

const LectureReviewItem = ({ rating, contents, assignment, team, grade }) => {

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
                    <span>{assignment_field[3-parseInt(assignment)]}</span>
                    <div className={styles.info_name}>조모임:</div>
                    <span>{team_field[3-parseInt(team)]}</span>
                    <div className={styles.info_name}>성적:</div>
                    <span>{grade_field[3-parseInt(grade)]}</span>
                </div>
            </div>
            <div className={styles.bottom}>
                {contents}
            </div>
        </div>
    );
}

export default LectureReviewItem;
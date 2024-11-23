import styles from './index.module.css';
import ProgressBar from '@/component/ProgressBar';

const LectureRating = ({review_cnt, rating}) => {
    const sum = rating.reduce((acc, cur, i) => acc + cur*(5-i), 0);
    const avg = sum/review_cnt;
    const biggest_index = rating.indexOf(Math.max(...rating));
    return (
        <div className={styles.LectureRating}>
            <div className={styles.total_wrap}>
                <span className={styles.avg}>{avg.toFixed(2)}</span>
                <div className={styles.off}><div style={{width: avg/5*100+'%'}}className={styles.on}></div></div>
                <span className={styles.subtxt}>({review_cnt}개의 평가)</span>
            </div>
            {
                rating.map((v, i) => (
                    <div key={i} className={styles.detail_item}>
                        <span className={styles.star}></span>
                        <span className={styles.txt}>{5-i}</span>
                        <div className={styles.progress_wrap}>
                            <span>{Math.round(v/review_cnt*100)}%</span>
                            <ProgressBar 
                                data={v} 
                                max={review_cnt} 
                                height='8px'
                                barColor={biggest_index===i ? 'var(--color-yellow-1)' : 'var(--color-yellow-1-opacity-30)'} 
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default LectureRating;
import ReviewItem from '@/component/ReviewItem';
import styles from './index.module.css';
import { rand } from '@/utils';

const ReviewList = ({lectures}) => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {
                    lectures?.map((v,i) => {
                        return (
                            <div key={i} className={styles.item}>
                                 <ReviewItem 
                                    name={v.course_name}
                                    professor={v.professor}
                                    rating={i===1? 2:rand(3,5)}
                                    preview={v.time}
                                />
                            </div>
                           
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ReviewList;
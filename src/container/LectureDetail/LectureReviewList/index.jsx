import styles from './index.module.css';
import LectureReviewItem from './LectureReviewItem';
import NoResult from './NoResult';

const LectureReviewList = ({reviews}) => {
    return (
        <div className={styles.container}>
            {
                reviews?.length > 0 ? reviews?.map((v, i) => (
                    <LectureReviewItem
                        key={i}
                        rating={v.rating}
                        contents={v.comment}
                    /> 
                )) : <NoResult />
            }
        </div>
    );
}

export default LectureReviewList;
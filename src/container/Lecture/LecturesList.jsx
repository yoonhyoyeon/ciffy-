import styles from './index.module.css';
import Link from 'next/link';
import ReviewItem from "@/component/ReviewItem";
import NoResult from './NoResult';

const LecturesList = ({lectures, keyword}) => {
    return (
        <div className={styles.item_wrap}>
            {lectures?.map((v, i) => {
                return (
                    <Link key={i} href={`/lecture/detail/${v.course_id}?name=${v.course_name}&professor=${v.professor}`}>
                        <ReviewItem
                            name={v.course_name}
                            professor={v.professor}
                            rating={v.avg_rating}
                            preview={v.preview}
                        />
                    </Link>
                )
            })}
            {lectures?.length===0 ? <NoResult keyword={keyword} /> : null}
        </div>
    );
}
export default LecturesList;
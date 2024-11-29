import styles from './index.module.css';
import Link from 'next/link';
import ReviewItem from "@/component/ReviewItem";

const LecturesList = ({lectures}) => {
    return (
        <div className={styles.item_wrap}>
            {lectures?.map((v, i) => {
                return (
                    <Link key={i} href={`/lecture/detail/${v.course_id}`}>
                        <ReviewItem
                            name={v.course_name}
                            professor={v.professor}
                            rating={v.avg_rating}
                            preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인."
                        />
                    </Link>
                )
            })}
            {lectures?.length===0 ? <h4>검색 결과가 없습니다</h4> : null}
        </div>
    );
}
export default LecturesList;
"use client"
import Button from '@/component/Button';
import styles from './index.module.css';
import LectureInfo from './LectureInfo';
import LectureReviewList from './LectureReviewList';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const LectureDetail = ({reviews, id}) => {
    const params = useSearchParams();
    return (
        <Suspense>
            <div className={styles.container}>
                <img onClick={() => history.back()} className={styles.close_btn} src="/images/x-icon.png" />
                <div className={styles.title_wrap}>
                    <span className={styles.text}>강의 정보</span>
                    <Link href={`/lecture/write/review/${id}?name=${params.get('name')}&professor=${params.get('professor')}`}>
                        <Button size="small" isShadow>후기 작성하기</Button>
                    </Link>
                </div>
                <div className={styles.contents_wrap}>
                    <LectureInfo 
                        name={params.get('name')}
                        professor={params.get('professor')}
                        reviews={reviews}
                    />
                    <LectureReviewList reviews={reviews}/>
                </div>
            </div>
        </Suspense>
        
    );
}

export default LectureDetail;
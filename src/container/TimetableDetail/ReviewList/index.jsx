import ReviewItem from '@/component/ReviewItem';
import styles from './index.module.css';
import Link from 'next/link';

const ReviewList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.item}>
                    <Link href="/lecture/detail/123">
                        <ReviewItem 
                            name="일본어2"
                            professor="김영주"
                            rating={4.2}
                            preview="과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것 과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것"
                        />
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/lecture/detail/123">
                        <ReviewItem 
                            name="일본어2"
                            professor="김영주"
                            rating={4.2}
                            preview="과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것 과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것"
                        />
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/lecture/detail/123">
                        <ReviewItem 
                            name="일본어2"
                            professor="김영주"
                            rating={4.2}
                            preview="과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것 과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것"
                        />
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/lecture/detail/123">
                        <ReviewItem 
                            name="일본어2"
                            professor="김영주"
                            rating={4.2}
                            preview="과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것 과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것"
                        />
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/lecture/detail/123">
                        <ReviewItem 
                            name="일본어2"
                            professor="김영주"
                            rating={4.2}
                            preview="과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것 과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것"
                        />
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link href="/lecture/detail/123">
                        <ReviewItem 
                            name="일본어2"
                            professor="김영주"
                            rating={4.2}
                            preview="과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것 과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ReviewList;
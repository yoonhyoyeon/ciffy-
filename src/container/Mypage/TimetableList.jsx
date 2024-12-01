"use client";
import Timetable from '@/component/Timetable';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TimetableList = ({timetables}) => {
    const router = useRouter();
    return (
        <div className={styles.TimetableList}>
            <div className={styles.contents_wrap}>
                {
                    timetables.map((v, i) => (
                        
                            <Link key={i} href="/timetable/1">
                                <div className={styles.timetable_wrap} key={i}>
                                <Timetable 
                                    data={v}
                                    selected={false}
                                    setSelected={() => {
                                        router.push('/timetable/1');
                                    }}
                                />
                                </div>
                            </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TimetableList;
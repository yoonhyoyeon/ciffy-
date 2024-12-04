"use client";
import Timetable from '@/component/Timetable';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { transformTimetable } from '@/utils'

const TimetableList = ({timetables}) => {
    const router = useRouter();
    return (
        <div className={styles.TimetableList}>
            <div className={styles.contents_wrap}>
                {
                    timetables?.map((v, i) => (
                            i===0?
                            <Link key={i} href="/timetable/1">
                                <div className={styles.timetable_wrap} key={i}>
                                <Timetable 
                                    data={transformTimetable(v)}
                                    selected={false}
                                    setSelected={() => {
                                        router.push('/timetable/1');
                                    }}
                                />
                                </div>
                            </Link>:null
                    ))
                }
            </div>
        </div>
    )
}

export default TimetableList;
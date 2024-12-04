"use client"
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import { transformTimetable } from '@/utils'

const TimetableSlider = ({ timetables, selected, setSelected }) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents_wrap}>
                {
                    timetables?.map((v, i) => (
                        <div key={i} className={styles.item}>
                            <Timetable 
                                setSelected={setSelected}
                                selected={selected} 
                                data={transformTimetable(v)}
                            />
                        </div>
                    ))
                }
            </div>
                
        </div>
    );
}

export default TimetableSlider;
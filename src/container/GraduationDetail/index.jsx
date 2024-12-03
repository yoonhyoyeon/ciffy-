"use client";
import Table from '@/component/Table';
import styles from './index.module.css';
import { GRADUATION_RQUIRED1, GRADUATION_RQUIRED2, GRADUATION_RQUIRED3, GRADUATION_RQUIRED4 } from '@/constants';
import { findLecture } from '@/utils';

const GraduationDetail = ({page_data}) => {
    const { id, title, max, data, takedLectures, requiredLectures, recommendedLectures } = page_data;
    const takedLectures_checked = takedLectures?.map((v) => {
        return {
            ...v,
            checked: findLecture(v.course_name, takedLectures)
        }
    })
    const requiredLectures_checked = requiredLectures?.map((v) => {
        return {
            ...v,
            checked: findLecture(v.course_name, takedLectures) || v.course_name === '일반물리학및실험1'
        }
    });
    const recommendedLectures_checked = recommendedLectures?.map((v) => {
        return {
            ...v,
            checked: findLecture(v.course_name, takedLectures)
        }
    });
    return (
        <div className={styles.container}>
            <img onClick={() => history.back()} className={styles.close_btn} src="/images/x-icon.png" />
            <h1 className={styles.title}>{title}</h1>
            {
                requiredLectures!==undefined && requiredLectures.length>0 ? 
                <>
                    <h2 className={styles.table_title}>필수과목</h2>
                    <Table data={requiredLectures_checked} />
                </> : null
            }
            {
                recommendedLectures!==undefined && recommendedLectures.length>0 ? 
                <>
                    <h2 className={styles.table_title}>필수과목 추천</h2>
                    <Table data={recommendedLectures_checked} />
                </> : null
            }
            {
                id === 2 ? 
                <>
                    <h2 className={styles.table_title}>내가 수강한 과목</h2>
                    <Table data={takedLectures_checked} />
                </> : null
            }
            {
                id === 6 ? <img className={styles.english} src='/images/English_table.png' /> : null
            }
        </div>
    );
}

export default GraduationDetail;
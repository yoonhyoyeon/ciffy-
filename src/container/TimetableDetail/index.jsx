"use client";
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import Button from '@/component/Button';
import CiffyComment from './CiffyComment';
import ReviewList from './ReviewList';
import ExpectedGraduation from './ExpectedGraduation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { transformTakedLectures, transformTimetable, transformCourseType } from '@/utils';
import { useRouter } from 'next/navigation';

const TimetableDetail = ({takedLectures}) => {
    const pathname = usePathname();
    const router = useRouter();
    const [ ai_comment, setAi_comment] = useState('');
    const [ timetable, setTimetable ] = useState({
        choice_id: 0,
        timetable: []
    });

    useEffect(() => {
        const selected = JSON.parse(localStorage.getItem('selected'));
        setTimetable(JSON.parse(localStorage.getItem('timetables')).filter((v) => {
            return v.choice_id===selected;
        })[0]);
        setAi_comment(localStorage.getItem('ai_comment'))
    }, []);

    const timetable_ui_data = transformTimetable(timetable);
    const expected_graduation_data = [ ...takedLectures, ...timetable.timetable.map((v) => {
        return {
            course_name: v.course_name,
            course_type: transformCourseType(v.type),
            credit: v.credits,
            grade: 0,
            grade_detail: 'P'
        }
    })];
    console.log(timetable_ui_data);

    const btn_style = {
        fontSize: '16px',
        fontWeight: 600,
        padding: '15px 0',
        borderRadius: '10px',
        margin: '0 3px'
    }
    return (
        <div className={styles.container}>
            <div className={styles.left_area}>
                <Timetable data={timetable_ui_data} selected/>
                <div className={styles.btn_wrapper}>
                    <Button
                        customStyles={{
                            backgroundColor: "#D6D9EC",
                            flex: 1,
                            ...btn_style
                        }}
                        onClick={() => history.back()}
                    >
                        뒤로 가기
                    </Button>
                    { pathname === '/timetable/create/select/detail' ?
                        <Button
                            onClick={() => {
                                router.push('/mypage')
                            }}
                            customStyles={{
                                flex: 2,
                                ...btn_style
                            }}
                            isShadow
                        >
                            시간표 저장
                        </Button> : null
                    }
                </div>
            </div>
            <div className={styles.right_area}>
                <CiffyComment ai_comment={ai_comment} choice_id={timetable.choice_id}/>
                <h2>강의 후기</h2>
                <ReviewList lectures={timetable.timetable} />
                <h2>학기 종료 후 졸업요건 (예상)</h2>
                <ExpectedGraduation prev={transformTakedLectures(takedLectures)} dataList={transformTakedLectures(expected_graduation_data)} />
            </div>
        </div>
    );
}

export default TimetableDetail;
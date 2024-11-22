"use client";
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import { timetableList } from '@/constants';
import Button from '@/component/Button';
import CiffyComment from './CiffyComment';
import ReviewList from './ReviewList';
import ExpectedGraduation from './ExpectedGraduation';

const dataList = [
    {
        id: 0,
        title: '전체',
        data: 94,
        max: 140
    },
    {
        id: 1,
        title: '전공 필수',
        data: 23,
        max: 33
    },
    {
        id: 2,
        title: '전공 선택',
        data: 24,
        max: 39
    },
    {
        id: 3,
        title: '교양 선택',
        data: 15,
        max: 21
    },
    {
        id: 4,
        title: '공통 교향 필수',
        data: 6,
        max: 8
    },
    {
        id: 5,
        title: '학문 기초 교양 필수',
        data: 3,
        max: 3
    },
    {
        id: 6,
        title: '영어 졸업 인증',
        data: 0,
        max: -1,
    }
];

const TimetableDetail = () => {
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
                <Timetable data={timetableList[0]} selected/>
                <div className={styles.btn_wrapper}>
                    <Button
                        customStyles={{
                            backgroundColor: "#D6D9EC",
                            flex: 1,
                            ...btn_style
                        }}
                        onClick={() => history.back()}
                    >
                            다시 선택
                    </Button>
                    <Button
                        customStyles={{
                            flex: 2,
                            ...btn_style
                        }}
                        isShadow
                    >
                        시간표 선택
                    </Button>
                </div>
            </div>
            <div className={styles.right_area}>
                <CiffyComment />
                <h2>강의 후기</h2>
                <ReviewList />
                <h2>학기 종료 후 졸업요건 (예상)</h2>
                <ExpectedGraduation dataList={dataList} />
            </div>
        </div>
    );
}

export default TimetableDetail;
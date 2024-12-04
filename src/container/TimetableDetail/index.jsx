"use client";
import styles from './index.module.css';
import Timetable from '@/component/Timetable';
import { timetableList } from '@/constants';
import Button from '@/component/Button';
import CiffyComment from './CiffyComment';
import ReviewList from './ReviewList';
import ExpectedGraduation from './ExpectedGraduation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { transformTakedLectures, transformTimetable, rand } from '@/utils';
import { useRouter } from 'next/navigation';

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

const TimetableDetail = ({takedLectures}) => {
    const pathname = usePathname();
    const router = useRouter();
    const [ ai_comment, setAi_comment] = useState('');
    const [ timetable_old, setTimetable_old ] = useState([]);
    const [ timetable, setTimetable ] = useState({
        choice_id: '',
        mon: [

        ],
        tue: [

        ],
        wed: [

        ],
        thu: [

        ],
        fri: [

        ],
        online: [

        ]
    });
    const dataList = () => {
        let result = transformTakedLectures(takedLectures);

    }

    useEffect(() => {
        const selected = JSON.parse(localStorage.getItem('selected'));
        setTimetable_old(JSON.parse(localStorage.getItem('timetables')).filter((v) => {
            return v.choice_id===selected;
        })[0]);
        setTimetable(transformTimetable(JSON.parse(localStorage.getItem('timetables')).filter((v) => {
            return v.choice_id===selected;
        })[0]));
        setAi_comment(localStorage.getItem('ai_comment'))
    }, [])

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
                <Timetable data={timetable} selected/>
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
                <ReviewList lectures={timetable_old.timetable} />
                <h2>학기 종료 후 졸업요건 (예상)</h2>
                <ExpectedGraduation dataList={transformTakedLectures(takedLectures).map((v) => (v.id==4||v.id==5||v.id==6?
                    v:
                    {
                        ...v,
                        data: v.data + 3
                    }
                ))} />
            </div>
        </div>
    );
}

export default TimetableDetail;
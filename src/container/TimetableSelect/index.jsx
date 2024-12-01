"use client"
import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimetableSlider from '@/component/TimetableSlider';
import Button from '@/component/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { timetableList } from '@/constants'

const TimetableSelect = () => {
    const router = useRouter();
    const [ timetables, setTimetables ] = useState([]);
    const [ selected, setSelected ] = useState(null);

    useEffect(() => {
        if(!window.sessionStorage.getItem('timetables')) {
            console.log('시간표 데이터가 없어 임시로 박을게요');
            window.sessionStorage.setItem('timetables', JSON.stringify(timetableList));
        }
        else {
            console.log('시간표 불러옴');
            setTimetables(JSON.parse(window.sessionStorage.getItem('timetables')));
        }
        if(!window.sessionStorage.getItem('selected')) {
            console.log('선택된 시간표가 없습니다.');
        }
        else {
            setSelected(JSON.parse(window.sessionStorage.getItem('selected')));
        }
    }, []);

    useEffect(() => {
        if(selected!==null) window.sessionStorage.setItem('selected', JSON.stringify(selected));
    }, [selected]);
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <h1 className={styles.title}>시간표 완성!</h1>
                <TimetableSlider timetables={timetables} selected={selected} setSelected={setSelected}/>
                <Button 
                    disabled={selected===null}
                    size="small" 
                    customStyles={{padding: '10px 50px', fontSize: '16px'}}
                    onClick={() => { router.push('/timetable/create/select/detail') }}
                >
                    시간표 선택
                </Button>
            </div>
        </div>
    );
}

export default TimetableSelect;
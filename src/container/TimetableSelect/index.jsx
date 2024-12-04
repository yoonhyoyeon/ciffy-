"use client"
import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimetableSlider from '@/component/TimetableSlider';
import Button from '@/component/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { garadata } from '@/constants';

const TimetableSelect = () => {
    const router = useRouter();
    const [ timetables, setTimetables ] = useState([]);
    const [ selected, setSelected ] = useState(null);

    useEffect(() => {
        if(window.localStorage.getItem('timetables')) {
            setTimetables(JSON.parse(window.localStorage.getItem('timetables')));
            console.log(JSON.parse(window.localStorage.getItem('timetables')));
        }
        
        if(window.localStorage.getItem('selected')) {
            setSelected(JSON.parse(window.localStorage.getItem('selected')));
        }
    }, []);

    useEffect(() => {
        if(selected!==null) window.localStorage.setItem('selected', JSON.stringify(selected));
    }, [selected]);

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <h1 className={styles.title}>시간표 완성!</h1>
                <TimetableSlider timetables={garadata} selected={selected} setSelected={setSelected}/>
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
"use client"
import styles from './index.module.css';
import { CircularProgressbarWithChildren, buildStyles } from '@/component/CircularProgressbar';
import '@/component/CircularProgressbar/styles.css';
import Button from '@/component/Button';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { GraduationTitle } from '@/constants';
import ExcelUploadPopup from '@/component/ExcelUploadPopup';
import { useSearchParams, useRouter } from 'next/navigation';

const TotalGraduate = ({dataobj}) => {
    const { data, max, id } = dataobj;
    const [value, setValue] = useState(0);
    const [popup, setPopup] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        console.log(searchParams.get('opened'));
        setPopup(searchParams.get('opened')==='1');
    }, [searchParams]);

    useEffect(() => {
        setValue(Math.round(data/max*100));
    }, [data, max]);
    return (
        <div className={styles.container}>
            <ExcelUploadPopup 
                opened={popup}
                setOpened={setPopup}
            />
            <div className={styles.leftArea}>
                <div>
                    <h1>{GraduationTitle[id]}</h1>
                    <h3>총 기준 학점 <span>{max}</span></h3>
                    <h3>총 이수 학점 <span>{data}</span></h3>
                </div>
                <div>
                    <Button onClick={() => setPopup(true)} isShadow size="medium">기이수 성적표 업로드</Button>
                </div>
            </div>
            <div className={styles.rightArea}>
                <CircularProgressbarWithChildren strokeWidth={6.5} value={value} styles={buildStyles({ pathTransitionDuration: 1})}>
                    <div><CountUp className={styles.CountUp} end={value} duration={1}/><span>%</span></div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}

export default TotalGraduate;
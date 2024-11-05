import styles from './index.module.css';
import { CircularProgressbarWithChildren, buildStyles } from '@/component/CircularProgressbar';
import '@/component/CircularProgressbar/styles.css';
import Button from '@/component/Button';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const TotalGraduate = ({data, max}) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(Math.round(data/max*100));
    }, [data, max]);
    return (
        <div className={styles.container}>
            <div className={styles.leftArea}>
                <div>
                    <h1>전체</h1>
                    <h3>총 기준 학점 <span>{data}</span></h3>
                    <h3>총 이수 학점 <span>{max}</span></h3>
                </div>
                <div>
                    <Button isShadow size="medium">기이수 성적표 업로드</Button>
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
"use client"
import styles from './index.module.css';
import GraduationProgress from '@/component/GraduationProgress';
import '@/component/CircularProgressbar/styles.css';
import TotalGraduate from '@/component/TotalGraduate';

const Graduation = ({data}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>졸업요건 분석</h1>
            <TotalGraduate data={data[0].data} max={data[0].max} />
            { data.map((v, i) => i!==0 ? <GraduationProgress data={v} key={i} /> : null) }
        </div>
    );
}

export default Graduation;
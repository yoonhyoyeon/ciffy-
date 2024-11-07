import Link from 'next/link';
import styles from './index.module.css';
import GraduationProgress from '@/component/GraduationProgress';
import TotalGraduate from '@/component/TotalGraduate';

const Graduation = ({data}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>졸업요건 분석</h1>
            <TotalGraduate dataobj={data[0]}/>
            { data.map((v, i) => i!==0 ? (<Link href={`/graduation/detail/${v.id}`}><GraduationProgress data={v} key={i} /></Link>) : null) }
        </div>
    );
}

export default Graduation;
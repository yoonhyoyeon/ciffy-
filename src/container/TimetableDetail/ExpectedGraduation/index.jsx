import styles from './index.module.css';
import GraduationProgress from '@/component/GraduationProgress'

const ExpectedGraduation = ({prev, dataList}) => {
    console.log(prev);
    console.log(dataList);
    return (
        <div className={styles.container}>
             { dataList.map((v, i) => i!==0 ? <GraduationProgress prev_data={v.data!==prev[i].data? prev[i].data : null } key={i} data={v} barColor={v.data!==prev[i].data ? 'var(--color-green-1)':'var(--color-blue-1)'}/> : null) }
        </div>
    );
}

export default ExpectedGraduation;
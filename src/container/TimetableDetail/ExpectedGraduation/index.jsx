import styles from './index.module.css';
import GraduationProgress from '@/component/GraduationProgress'

const ExpectedGraduation = ({dataList}) => {
    return (
        <div className={styles.container}>
             { dataList.map((v, i) => i!==0 ? <GraduationProgress key={i} data={v} barColor={i==1||i==2||i==3?'var(--color-green-1)':'var(--color-blue-1)'}/> : null) }
        </div>
    );
}

export default ExpectedGraduation;
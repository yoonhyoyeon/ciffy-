import styles from './index.module.css';
import Table from '@/component/Table';

const GraduationDetail = ({id, title}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.table_title}>필수과목</h2>
            <Table data={data} />
        </div>
    );
}

export default GraduationDetail;
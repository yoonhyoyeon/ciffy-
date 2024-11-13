import styles from './index.module.css';

const Table = ({data}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.table_title}>필수과목</h2>
            <Table data={data} />
        </div>
    );
}

export default Table;
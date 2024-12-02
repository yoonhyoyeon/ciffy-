import styles from './index.module.css';

const TableRow = ({year, term, code, name, type, sector, credit, isF}) => {
    return (
        <div className={`${styles.container} ${ isF ? styles.isF : null}`}>
            <div className={styles.cell}>{year}</div>
            <div className={styles.cell}>{term}</div>
            <div className={styles.cell}>{code}</div>
            <div className={styles.cell}>{name}</div>
            <div className={styles.cell}>{type}</div>
            <div className={styles.cell}>{sector}</div>
            <div className={styles.cell}>{credit}</div>
        </div>
    );
}

export default TableRow;
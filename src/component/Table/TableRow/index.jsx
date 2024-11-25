import styles from './index.module.css';

const TableRow = ({code, name, type, sector, credit, checked}) => {
    return (
        <div className={styles.container}>
            <div className={styles.cell}>{code}</div>
            <div className={styles.cell}>{name}</div>
            <div className={styles.cell}>{type}</div>
            <div className={styles.cell}>{sector}</div>
            <div className={styles.cell}>{credit}</div>
            <div className={styles.cell}>
                <div className={styles.checked_wrap}>
                    {checked ? <div className={styles.checked}><img className={styles.icon} src="/images/checked-icon.png" /></div> : null}
                </div>
            </div>
        </div>
    );
}

export default TableRow;
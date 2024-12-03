import styles from './index.module.css';
import Link from 'next/link';

const TableRow = ({code, name, type, sector, credit, checked, isHeader}) => {
    return (
        <div className={`${styles.container} ${checked ? styles.checked : null}`}>
            <div className={styles.cell}>{code}</div>
            <div className={styles.cell}><Link href={`/lecture?keyword=${name}`}>{name}</Link></div>
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
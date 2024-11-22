import styles from './index.module.css';
import TableRow from './TableRow';

const Table = ({data}) => {
    return (
        <div className={styles.container}>
            <TableRow
                code="학수번호"
                name="과목명"
                type="이수구분"
                sector="선택영역"
                credit="학점"
                checked={false}
            />
            { data.map((v, i) => (
                <TableRow 
                    key={i}
                    code={v.code} 
                    name={v.name} 
                    type={v.type}
                    sector={v.sector}
                    credit={v.credit}
                    checked={v.checked}
                />
            ))}
        </div>
    );
}

export default Table;
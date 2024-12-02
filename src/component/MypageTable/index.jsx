import styles from './index.module.css';
import TableRow from './TableRow';
import { isFailedLecture } from '@/utils';

const Table = ({takedLectures}) => {
    return (
        <div className={styles.container}>
            <TableRow
                year="년도"
                term="학기"
                code="학수번호"
                name="과목명"
                type="이수구분"
                sector="선택영역"
                credit="학점"
            />
            { takedLectures?.map((v, i) => (
                <TableRow 
                    key={i}
                    year={v.year}
                    term={v.semester}
                    code={v.course_code} 
                    name={v.course_name} 
                    type={v.course_type}
                    sector={v.choice}
                    credit={v.credit}
                    isF={isFailedLecture(v)}
                />
            ))}
        </div>
    );
}

export default Table;
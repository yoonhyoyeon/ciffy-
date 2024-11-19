import styles from './index.module.css';
import TimetableItem from './TimetableItem';

const Timetable = ({time_data, selected, setSelected}) => {
    return (
        <div 
            className={`${styles.container} ${selected ? styles.active : null}`}
            onClick={setSelected}
        >
            <div className={styles.timetable_wrap}>
                <div className={styles.mask}>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                    <div className={styles.row}></div>
                </div>
                <div className={styles.time_label}>
                    <span className={styles.label}>9</span>
                    <span className={styles.label}>10</span>
                    <span className={styles.label}>11</span>
                    <span className={styles.label}>12</span>
                    <span className={styles.label}>1</span>
                    <span className={styles.label}>2</span>
                    <span className={styles.label}>3</span>
                    <span className={styles.label}>4</span>
                    <span className={styles.label}>5</span>
                    <span className={styles.label}>6</span>
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>월</span>
                    {
                        time_data.mon.map((v, i) => (
                            <TimetableItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>화</span>
                    {
                        time_data.tue.map((v, i) => (
                            <TimetableItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>수</span>
                    {
                        time_data.wed.map((v, i) => (
                            <TimetableItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>목</span>
                    {
                        time_data.thu.map((v, i) => (
                            <TimetableItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
                <div className={styles.column}>
                    <span className={styles.label}>금</span>
                    {
                        time_data.fri.map((v, i) => (
                            <TimetableItem 
                                key={i}
                                data={v}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.online_wrap}>
                {
                    time_data.online.map((v, i) => (
                        <span key={i}>{ v.name }</span>
                    ))
                }
            </div>
        </div>
    );
}

export default Timetable;
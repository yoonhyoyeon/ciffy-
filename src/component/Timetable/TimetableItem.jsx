import styles from './index.module.css';

const TimetableItem = ({data}) => {
    const { name, profeccer, classroom, time } = data;
    const style = {
        height: `${(time.end-time.start)*45}px`,
        top: `${(time.start-9)*45}px`
    }
    return (
        <div className={styles.item_container} style={style}>
            <span className={styles.name}>
                { name }
            </span>
            <span className={styles.subtxt}>
                { profeccer }<br />
                { classroom }
            </span>
        </div>
    );
}

export default TimetableItem;
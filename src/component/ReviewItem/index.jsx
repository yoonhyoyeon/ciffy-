import styles from './index.module.css';

const ReviewItem = ({name, professor, rating, preview}) => {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            <h3>{professor}</h3>
            <div className={styles.off}><div style={{width: rating/5*100+'%'}}className={styles.on}></div></div>
            <div className={styles.preview_wrap}>
                <p>{preview}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
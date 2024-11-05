import styles from './index.module.css';

const GraduationProgress = ({data}) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{data.title}</span>
            <span className={styles.contents}>{data.max!==-1 ? `${data.data} / ${data.max}` : (data.data===0 ? 'NP':'P')}</span>
            <div className={styles.progress_wrap}>
                <span className={styles.text}>{Math.round(data.data/data.max*100)}%</span>
                <div className={styles.progress_bg}><div className={styles.progress_bar} style={{width: data.data/data.max*100+'%'}}></div></div>
            </div>
        </div>
    )
}

export default GraduationProgress;
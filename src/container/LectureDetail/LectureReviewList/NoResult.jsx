import styles from './index.module.css';

const NoResult = () => {
    return (
        <div className={styles.no_result}>
            <img src="/images/no-result-icon.png" />
            <span>등록된 강의 후기가 없습니다.</span>
        </div>
    )
}

export default NoResult;
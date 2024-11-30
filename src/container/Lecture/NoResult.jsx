import styles from './index.module.css';

const NoResult = ({keyword}) => {
    return (
        <div className={styles.no_result}>
            <img src="/images/no-result-icon.png" />
            <span>"{keyword}" 에 대한 강의 검색 결과가 없습니다.</span>
        </div>
    )
}

export default NoResult;
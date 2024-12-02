import styles from './index.module.css';

const WhenInput = ({when, setWhen}) => {
    return (
        <div className={styles.container}>
            <img src="/images/select-arrow-icon.png" />
            <select value={when} onChange={(e) => {
                setWhen(e.target.value)
            }}>
                <option value="24년 2학기">24년 2학기</option>
                <option value="24년 여름">24년 여름</option>
                <option value="24년 1학기">24년 1학기</option>
                <option value="23년 겨울">23년 겨울</option>
                <option value="23년 2학기">23년 2학기</option>
                <option value="23년 여름">23년 여름</option>
                <option value="23년 1학기">23년 1학기</option>
                <option value="22년 겨울">22년 겨울</option>
                <option value="22년 2학기">22년 2학기</option>
            </select>
        </div>
    )
}

export default WhenInput;
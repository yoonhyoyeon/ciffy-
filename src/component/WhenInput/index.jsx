import styles from './index.module.css';

const WhenInput = ({when, setWhen}) => {
    return (
        <div className={styles.container}>
            <img src="/images/select-arrow-icon.png" />
            <select value={when} onChange={(e) => {
                setWhen(e.target.value)
            }}>
                <option value="24년 2학기">24년 2학기</option>
            </select>
        </div>
    )
}

export default WhenInput;
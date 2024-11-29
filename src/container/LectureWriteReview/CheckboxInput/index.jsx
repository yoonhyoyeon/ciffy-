import styles from './index.module.css';

const CheckboxInput = ({ data, setData, field}) => {
    return (
        <div className={styles.container}>
            { field.map((v, i) => (
                    <div 
                        key={i} 
                        className={styles.item} 
                        onClick={() => {
                            setData(i+1);
                        }}
                    >
                        <div className={styles.checkbox}>
                            { data === i+1 ? <img src="/images/checked-icon-1.png" /> : null }
                        </div>
                        <span className={styles.txt}>{v}</span>
                    </div>
                )) }
        </div>
    )
}

export default CheckboxInput;
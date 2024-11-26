import styles from './index.module.css';

const Input = ({value, onChange, type, placeholder}) => {
    return (
        <input 
            className={styles.input}
            value={value} 
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input;
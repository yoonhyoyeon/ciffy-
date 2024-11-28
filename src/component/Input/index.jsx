import styles from './index.module.css';

const Input = ({value, onChange, type, placeholder, onKeyPress}) => {
    return (
        <input 
            className={styles.input}
            value={value} 
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            onKeyPress={onKeyPress}
        />
    )
}

export default Input;
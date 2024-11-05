import styles from './index.module.css';

const Button = ({size, isShadow, customStyles, onClick, children}) => {
    const sizeStyles = {
        small: { padding: '10px 20px', fontSize: '16px', borderRadius: '5px'},
        medium: { padding: '15px 58px', fontSize: '20px', borderRadius: '8px'},
        large: { padding: '20px 58px', fontSize: '25px', borderRadius: '15px'} 
    }
    const shadowStyles = isShadow ? {
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)'
    } : null;
    return (
        <button className={styles.btn} style={{...customStyles, ...sizeStyles[size], ...shadowStyles}} onClick={onClick}>{children}</button>
    )
}

export default Button;
import styles from './index.module.css';

const Button = ({size, isShadow, customStyles, onClick, children, disabled}) => {
    const sizeStyle = {
        small: { padding: '10px 20px', fontSize: '16px', borderRadius: '5px'},
        medium: { padding: '15px 58px', fontSize: '20px', borderRadius: '8px'},
        large: { padding: '20px 58px', fontSize: '25px', borderRadius: '15px'} 
    }
    const shadowStyle = isShadow ? {
        boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)'
    } : null;
    const disabledStyle = disabled ? {
        opacity: '0.5'
    } : null;

    const style = {
        ...disabledStyle,
        ...shadowStyle, 
        ...sizeStyle[size], 
        ...customStyles
    };
    return (
        <button 
            className={styles.btn}
            style={style} 
            onClick={disabled ? null : onClick}
        >
            {children}
        </button>
    )
}

export default Button;
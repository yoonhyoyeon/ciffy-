import styles from './index.module.css';

const Button = ({size, customStyles, onClick, children}) => {
    const sizeStyle = () => {
        if(size==="small") return { width: '100px', height: '40px', fontSize:'16px', borderRadius: '5px' };
        else if(size==="medium") return { width: '150px', height: '60px', fontSize: '18px', borderRadius: '8px'};
        else if(size==="large") return { width: '240px', height: '82px', fontSize: '25px', borderRadius: '15px'};
        else return { width: '150px', height: '60px', fontSize: '18px' };
    }
    return (
        <button className={styles.btn} style={{...customStyles, ...sizeStyle()}} onClick={onClick}>{children}</button>
    )
}

export default Button;
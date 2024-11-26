import styles from './index.module.css';

const Popup = ({opened, setOpened, children}) => {
    const closePopup = () => setOpened(false);

    return (
        <div className={styles.container} style={opened ? {display: 'flex'} : null}>
            <div className={styles.background} onClick={closePopup} ></div>
            <div className={styles.popup}>
                <img onClick={closePopup} className={styles.close_btn} src="/images/x-icon.png" />
                {children}
            </div>
        </div>
    )
}

export default Popup;
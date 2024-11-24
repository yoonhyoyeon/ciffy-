import styles from './index.module.css';

const RatingInput = ({rating, setRating}) => {
    return (
        <div className={styles.container}>
            <div className={styles.off}>
                <div 
                    className={styles.btn}
                    onClick={() => {
                        setRating(1)
                    }}
                ></div>
                <div 
                    className={styles.btn}
                    onClick={() => {
                        setRating(2)
                    }}
                ></div>
                <div 
                    className={styles.btn}
                    onClick={() => {
                        setRating(3)
                    }}
                ></div>
                <div 
                    className={styles.btn}
                    onClick={() => {
                        setRating(4)
                    }}
                ></div>
                <div 
                    className={styles.btn}
                    onClick={() => {
                        setRating(5)
                    }}
                ></div>
                <div style={{width: rating/5*100+'%'}} className={styles.on}></div>
            </div>
            {
                rating!==null ? <span className={styles.txt}>{rating}점</span> : null
            }
        </div>
    )
}

export default RatingInput;
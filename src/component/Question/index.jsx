"use client"
import styles from './index.module.css';

const Question = ({score, setScore, number, question}) => {

    return (
        <div className={styles.container}>
            <h3>{number}</h3>
            <h1>{question}</h1>
            <div className={styles.input_wrap}>
                <h4>그렇다</h4>
                <span className={`${styles.radio} ${score===2 ? styles.active : null}`} onClick={()=>{setScore(2)}}></span>
                <span className={`${styles.radio} ${score===1 ? styles.active : null}`}onClick={()=>{setScore(1)}}></span>
                <span className={`${styles.radio} ${score===0 ? styles.active : null}`} onClick={()=>{setScore(0)}}></span>
                <span className={`${styles.radio} ${score===-1 ? styles.active : null}`} onClick={()=>{setScore(-1)}}></span>
                <span className={`${styles.radio} ${score===-2 ? styles.active : null}`} onClick={()=>{setScore(-2)}}></span>
                <h4>그렇지 않다</h4>
            </div>
            
        </div>
    )
}

export default Question;
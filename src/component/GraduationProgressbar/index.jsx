import styles from './index.module.css';

const GraduationProgressbar = ({data}) => {
    return (
        <div>
            <span>{data.title}</span>
            <span>{data.data} / {data.max}</span>
            <div>
                <span>{Math.floor(data.data/data.max*100)}%</span>
                <div><div style={{width: data.data/data.max+'%'}}></div></div>
            </div>
        </div>
    )
}

export default GraduationProgressbar;
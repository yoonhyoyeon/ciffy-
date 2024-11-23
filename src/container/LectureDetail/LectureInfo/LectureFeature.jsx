import ProgressBar from '@/component/ProgressBar';
import styles from './index.module.css';


//<div className={styles.off}><div style={{width: rating/5*100+'%'}}className={styles.on}></div></div>

const LectureFeature = ({review_cnt, assignment, team, grade}) => {
    const getLectureFeatureData = () => {
        if(assignment) return {
            title: '과제',
            contents: ['없음', '보통', '많음'],
            value: assignment
        };
        else if(team) return  {
            title: '조모임',
            contents: ['없음', '보통', '많음'],
            value: team,
        };
        else if(grade) return  {
            title: '성적',
            contents: ['너그러움', '보통', '깐깐함'],
            value: grade,
        };
        else return {
            title: '?',
            contents: ['?', '?', '?'],
            value: [0, 0, 0]
        };
    }
    const data = getLectureFeatureData();
    const biggest_index = data.value.indexOf(Math.max(...data.value));
    
    return (
        <div className={styles.LectureFeature}>
            <h1>{data.title}</h1>
            <div className={styles.contents_wrap}>
                {
                    data.contents.map((v, i) => {
                        return (
                            <div key={i} className={styles.item}>
                                <span className={styles.name}>{v}</span>
                                <div className={styles.progress_wrap}>
                                    <span>{Math.round(data.value[i]/review_cnt*100)}%</span>
                                    <ProgressBar 
                                        data={data.value[i]} 
                                        max={review_cnt} 
                                        barColor={biggest_index===i ? 'var(--color-blue-1)' : 'var(--color-blue-1-opacity-30)'} 
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}

export default LectureFeature;
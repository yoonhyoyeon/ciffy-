import styles from './index.module.css';
import GraduationProgressbar from '@/component/GraduationProgressbar';

const Graduation = () => {
    const data = [
        {
            title: '전체',
            data: 94,
            max: 140
        },
        {
            title: '전공 필수',
            data: 23,
            max: 33
        },
        {
            title: '전공 선택',
            data: 24,
            max: 39
        },
        {
            title: '교양 선택',
            data: 15,
            max: 21,
            required: false,
        }
    ];
    return (
        <div>
            <h1>졸업요건 분석</h1>
            { data.map((v, i) => <GraduationProgressbar data={v} key={i} />) }
        </div>
    );
}

export default Graduation;
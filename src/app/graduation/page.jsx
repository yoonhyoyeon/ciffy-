import Graduation from '@/container/Graduation';

export const metadata = {
    title: '졸업요건분석'
}

const GraduationPage = () => {
    const data = [
        {
            id: 0,
            title: '전체',
            data: 94,
            max: 140
        },
        {
            id: 1,
            title: '전공 필수',
            data: 23,
            max: 33
        },
        {
            id: 2,
            title: '전공 선택',
            data: 24,
            max: 39
        },
        {
            id: 3,
            title: '교양 선택',
            data: 15,
            max: 21
        },
        {
            id: 4,
            title: '공통 교향 필수',
            data: 6,
            max: 8
        },
        {
            id: 5,
            title: '학문 기초 교양 필수',
            data: 3,
            max: 3
        },
        {
            id: 6,
            title: '영어 졸업 인증',
            data: 0,
            max: -1,
        }
    ];
    return (
        <Graduation data={data}/>
    )
}

export default GraduationPage;
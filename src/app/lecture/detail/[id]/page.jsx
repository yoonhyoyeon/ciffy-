import LectureDetail from '@/container/LectureDetail';

const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        name: '수요집현강좌',
        professor: '이석배',
        review_cnt: 47,
        rating: [27, 10, 5, 3 ,2],
        assignment: [3, 30, 14],
        team: [47, 0, 0],
        grade: [27, 12, 8]
    };
}

export const generateMetadata = async ({params}) => {
    const { id } = await params;
    const data = await getData();
    return { title: `강의후기 - ${data.name}` };
}

const LectureDetailPage = async ({params}) => {
    const data = await getData();
    return (
        <LectureDetail data={data}/>
    )
}

export default LectureDetailPage;
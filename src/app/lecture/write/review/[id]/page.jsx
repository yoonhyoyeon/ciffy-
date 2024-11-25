import LectureWriteReview from '@/container/LectureWriteReview';

const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        name: '수요집현강좌',
        professor: '이석배'
    };
}

export const generateMetadata = async ({params}) => {
    const { id } = await params;
    const data = await getData();
    return { title: `강의후기 작성 - ${data.name}` };
}

const LectureWriteReviewPage = async ({params}) => {
    const data = await getData();
    const { id } = await params;
    return (
        <LectureWriteReview data={data} id={id}/>
    )
}

export default LectureWriteReviewPage;
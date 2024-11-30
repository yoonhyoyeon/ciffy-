import LectureWriteReview from '@/container/LectureWriteReview';


export const generateMetadata = async ({params}) => {
    const { id } = await params;
    return { title: `강의후기 작성 - ${'test'}` };
}

const LectureWriteReviewPage = async ({params}) => {
    const { id } = await params;
    return (
        <LectureWriteReview id={id}/>
    )
}

export default LectureWriteReviewPage;
import LectureWriteReview from '@/container/LectureWriteReview';
import { Suspense } from 'react';

export const generateMetadata = async ({params}) => {
    const { id } = await params;
    return { title: `강의후기 작성 - ${'test'}` };
}

const LectureWriteReviewPage = async ({params}) => {
    const { id } = await params;
    return (
        <Suspense>
            <LectureWriteReview id={id}/>
        </Suspense>
    )
}

export default LectureWriteReviewPage;
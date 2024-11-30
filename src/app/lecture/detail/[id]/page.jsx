import LectureDetail from '@/container/LectureDetail';
import { getLectureReviews } from '@/service';

export const generateMetadata = async ({params}) => {
    const { id } = await params;

    return { title: `강의후기 - ${'test'}` };
}

const LectureDetailPage = async ({params}) => {
    const { id } = await params;

    const reviews = await getLectureReviews(id);

    return (
        <LectureDetail reviews={reviews} id={id}/>
    )
}

export default LectureDetailPage;
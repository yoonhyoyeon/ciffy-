import GraduationDetail from '@/container/GraduationDetail';
import { GraduationTitle } from '@/constants';

export const generateMetadata = async ({params}) => {
    const { id } = await params;
    return { title: `졸업요건분석 - ${GraduationTitle[id]}` };
}

const GraduationDetailPage = async ({params}) => {
    const { id } = await params;
    return (
        <GraduationDetail id={id} title={GraduationTitle[id]}/>
    )
}

export default GraduationDetailPage;
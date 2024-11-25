import GraduationDetail from '@/container/GraduationDetail';
import { GraduationTitle } from '@/constants';

const getData = async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "hi";
}

export const generateMetadata = async ({params}) => {
    const { id } = await params;
    return { title: `졸업요건분석 - ${GraduationTitle[id]}` };
}

const GraduationDetailPage = async ({params}) => {
    const a= await getData();
    const { id } = await params;
    return (
        <GraduationDetail id={id} title={GraduationTitle[id]}/>
    )
}

export default GraduationDetailPage;
import GraduationDetail from '@/container/GraduationDetail';
import { GraduationTitle } from '@/constants';
import { cookies } from 'next/headers';
import { getTakedLectures } from '@/service';
import { transformTakedLectures } from '@/utils';

export const generateMetadata = async ({params}) => {
    const { id } = await params;
    return { title: `졸업요건분석 - ${GraduationTitle[id]}` };
}

const GraduationDetailPage = async ({params}) => {
    const cookieStore = await cookies();
    const user_id = cookieStore.get('id').value;
    const takedLectures = await getTakedLectures(user_id);
    const data = transformTakedLectures(takedLectures);
    const { id } = await params;
    
    return (
        <GraduationDetail user_id={id} page_data={data[id]}/>
    )
}

export default GraduationDetailPage;
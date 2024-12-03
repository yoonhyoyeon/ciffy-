import Graduation from '@/container/Graduation';
import { getTakedLectures } from '@/service';
import { cookies } from 'next/headers';
import { transformTakedLectures } from '@/utils';

export const metadata = {
    title: '졸업요건분석'
}

const GraduationPage = async () => {
    const cookieStore = await cookies();
    const id = cookieStore.get('id').value;
    const takedLectures = await getTakedLectures(id);
    const data = transformTakedLectures(takedLectures);

    return (
        <Graduation data={data}/>
    )
}

export default GraduationPage;
import Mypage from '@/container/Mypage';
import { getTakedLectures } from '@/service';
import { cookies } from 'next/headers';

export const metadata = {
    title: '강의후기'
}

const MypagePage = async () => {
    const cookieStore = await cookies();
    const id = cookieStore.get('id').value;
    const takedLectures = await getTakedLectures(id);
    return (
        <Mypage takedLectures={takedLectures} />
    )
}

export default MypagePage;
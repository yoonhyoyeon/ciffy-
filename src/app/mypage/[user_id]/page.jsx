import Mypage from "@/container/Mypage";
import { getTakedLectures } from '@/service';

export const metadata = {
    title: '마이페이지'
}

const MypagePage = async ({params}) => {
    const { user_id } = await params;
    const takedLectures = await getTakedLectures(user_id);

    return <Mypage takedLectures={takedLectures} />
}

export default MypagePage;
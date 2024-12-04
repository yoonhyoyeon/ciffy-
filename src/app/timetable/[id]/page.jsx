import TimetableDetail from "@/container/TimetableDetail";
import { cookies } from "next/headers";
import { getTakedLectures } from '@/service';

export const metadata = {
    title: '시간표 정보'
}

const TimetableDetailPage = async() => {
    const cookieStore = await cookies();
    const id = cookieStore.get('id').value;
    const takedLectures = await getTakedLectures(id);
    return <TimetableDetail takedLectures={takedLectures}/>
}

export default TimetableDetailPage;
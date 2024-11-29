import Lecture from '@/container/Lecture';
import { getLecturesData } from '@/service';

export const metadata = {
    title: '강의후기'
}

const LecturePage = async () => {
    const lectures_data = await getLecturesData();
    return (
        <div>
            <Lecture 
                lectures_data = {lectures_data}
            />
        </div>
    )
}

export default LecturePage;
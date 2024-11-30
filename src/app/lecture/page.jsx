import Lecture from '@/container/Lecture';
import { getLecturesData } from '@/service';
import { Suspense } from 'react';

export const metadata = {
    title: '강의후기'
}

const LecturePage = async () => {
    const lectures_data = await getLecturesData();
    return (
        <Suspense>
            <div>
                <Lecture 
                    lectures_data = {lectures_data}
                />
            </div>
        </Suspense>
        
    )
}

export default LecturePage;
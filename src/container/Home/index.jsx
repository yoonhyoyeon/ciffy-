'use client';
import Button from "@/component/Button";
import styles from './index.module.css';
import Link from 'next/link';
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import GuideExcelPopup from "@/component/GuideExcelPopup";

const Home = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [ opened, setOpend ] = useState(false);

    const CheckUploaded = async (student_id) => {
        const response = await fetch(`/api/get-course-data?student_id=${student_id}`);
        const result = await response.json();
        if(result.status === 'success') {
            if(result.data.length > 0) setOpend(false);
            else setOpend(true);
        }
        else {
            setOpend(true);
        }
    }

    useEffect(() => {
        const student_id=searchParams.get('isFirst');
        if(student_id) {
            CheckUploaded(student_id).then(() => {
                router.replace('/');
            });
        }
    }, [searchParams]);
    return (
    <div className={styles.container}>
        <GuideExcelPopup opened={opened} setOpened={setOpend} />
        <div className={styles.contents}>
            <h2>귀찮았던 시간표 짜기는 이제 안녕 👋🏻</h2>
            <div className={styles.typed_container}>
            <ReactTyped 
                loop
                startWhenVisible
                strings={['<h1>시간표의 새 패러다임, <span>시피</span>를 소개합니다</h1>']} 
                typeSpeed={60}
                showCursor={true}
                backDelay={6000}
            />
            </div>
            <img src="/images/timetable.png" />
            <Link href="/timetable/create/survey">
                <Button isShadow size="medium">시간표 짜기</Button>
            </Link>
        </div>
    </div>
    );
};

export default Home;
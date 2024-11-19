import Button from "@/component/Button";
import styles from './index.module.css';
import Link from 'next/link';

const Home = async () => {
    // const res = await fetch('http://3.208.248.230:3000/api/ask', {
    //     method: "POST", // *GET, POST, PUT, DELETE 등
    //     mode: "cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify({
    //         "question": "친구는 어떻게 만들어?"
    //     })
    // });
    // console.log(await res.json());
    return (
    <div className={styles.container}>
        <div className={styles.contents}>
            <h2>귀찮았던 시간표 짜기는 이제 안녕</h2>
            <h1>시간표의 새 패러다임, <span>시피</span>를 소개합니다</h1>
            <img src="/images/timetable.png" />
            <Link href="/timetable/create/survey">
                <Button isShadow size="large">시간표 짜기</Button>
            </Link>
        </div>
    </div>
    );
};

export default Home;
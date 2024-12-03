"use client";
import styles from './index.module.css';
import Popup from "@/component/Popup";
import Button from '@/component/Button';
import { useRouter } from 'next/navigation'; 

const GuideExcelPopup = ({opened, setOpened}) => {
    const router = useRouter();
    return (
        <Popup opened={opened} setOpened={setOpened}>
            <div className={styles.container}>
                <img src="/images/warnning-icon.png" />
                <h1>기이수 성적이 업로드되어 있지 않아요!</h1>
                <p>졸업 요건 검사와 시간표 추천을 위해 기이수 성적이 필요해요.</p>
                <p>원활한 서비스 이용을 위해 기이수 성적 파일을 업로드 해주세요.</p>
                <div className={styles.btn_wrap}>
                    <Button 
                        size="small"
                        onClick={() => setOpened(false)}
                    >다음에 하기</Button>
                    <Button
                        size="small"
                        onClick={() => {
                            router.push('/graduation?opened=1');
                            setOpened(false);
                        }}
                    >업로드 하러가기</Button>
                        
                </div>
            </div>
        </Popup>
    );
};

export default GuideExcelPopup;
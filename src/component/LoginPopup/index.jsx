"use client";
import { useState } from 'react';
import styles from './index.module.css';
import Popup from '@/component/Popup';
import Input from '@/component/Input';
import Button from '@/component/Button';
import { login, getUserInfo } from '@/service';
import { useRouter } from 'next/navigation';

const LoginPopup = ({opened, setOpened, setIsAuthorized, setUserinfo}) => {
    const [ id, setId ] = useState('');
    const [ pw, setPw ] = useState('');
    const router = useRouter();

    const submit = async() => {
        const result = await login(id, pw);
        if(result) {
            //회원 정보 저장
            const user_info = await getUserInfo(id, pw);
            localStorage.setItem('user_info', JSON.stringify(user_info));
            //로그인 팝업 닫고
            setOpened(false);
            router.replace(`/?isFirst=${id}&name=${user_info.name}`);
            // setIsAuthorized(true);
            // setUserinfo(user_info);
            location.reload(true);
        }
    };

    return (
        <Popup opened={opened} setOpened={setOpened}>
            <div className={styles.container}>
                <img className={styles.logo} src="/images/logo.png" />
                <span className={styles.txt}>대양휴머니티칼리지 사이트에 로그인하여 인증합니다.<br/>(세종대학교 포털 ID/PW와 동일)</span>
                <Input 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="text"
                    placeholder="아이디"
                    onKeyPress={(e) => {
                        if(e.key==='Enter') submit();
                    }}
                />
                <Input 
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    type="password"
                    placeholder="비밀번호"
                    onKeyPress={(e) => {
                        if(e.key==='Enter') submit();
                    }}
                />
                <Button size="small" onClick={submit}>로그인</Button>
                <div className={styles.txt}></div>
            </div>
        </Popup>
    )
}

export default LoginPopup;
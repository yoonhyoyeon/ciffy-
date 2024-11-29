import { useState } from 'react';
import styles from './index.module.css';
import Popup from '@/component/Popup';
import Input from '@/component/Input';
import Button from '@/component/Button';
import { login } from '@/service';

const LoginPopup = ({opened, setOpened}) => {
    const [ id, setId ] = useState('');
    const [ pw, setPw ] = useState('');

    const submit = () => {
        login(id, pw);
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
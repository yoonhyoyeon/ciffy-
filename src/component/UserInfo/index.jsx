"use client";
import styles from './index.module.css';

const UserInfo = ({userinfo}) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents_wrap}>
                <h2 className={styles.contents_name}>내 정보</h2>
                <div className={styles.item}>
                    <span className={styles.name}>이름</span>
                    <span className={styles.value}>{userinfo.name}</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.name}>학과</span>
                    <span className={styles.value}>{userinfo.major}</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.name}>학번</span>
                    <span className={styles.value}>{userinfo.id}</span>
                </div>
            </div>
            <div className={styles.contents_wrap}>
                <h2 className={styles.contents_name}>고전독서인증</h2>
                <div className={styles.item}>
                    <span className={styles.name}>서양</span>
                    <span className={styles.value}>{userinfo.book ? userinfo.book[0] : 0}권</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.name}>동양</span>
                    <span className={styles.value}>{userinfo.book ? userinfo.book[1] : 0}권</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.name}>동서양</span>
                    <span className={styles.value}>{userinfo.book ? userinfo.book[2] : 0}권</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.name}>과학사상</span>
                    <span className={styles.value}>{userinfo.book ? userinfo.book[3] : 0}권</span>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
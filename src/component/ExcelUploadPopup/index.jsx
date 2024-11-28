"use client"
import { useState } from 'react';
import styles from './index.module.css';
import Popup from '@/component/Popup';
import Button from '@/component/Button';
import FileForm from '@/component/FileForm';

const ExcelUploadPopup = ({opened, setOpened}) => {
    return (
        <Popup opened={opened} setOpened={setOpened}>
            <div className={styles.container}>
                <h1>기이수 성적 업로드</h1>
                <p className={styles.txt}>1. <a href="https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp?rtUrl=sjpt.sejong.ac.kr" target="_blank">학사정보시스템</a> 사이트에 로그인합니다. </p>
                <p className={styles.txt}>2. 왼쪽 메뉴바에서 수업/성적 &gt; 성적 및 강의평가 &gt; 기이수성적조회 로 이동합니다.</p>
                <p className={styles.txt}>3. 성적 엑셀 다운로드 버튼을 클릭해 다운로드 한 후, 해당 파일을 아래에 업로드 합니다.</p>
                <p className={styles.sub_txt}>* 엑셀 파일은 수정하지 않고 업로드 해야하며, 업로드된 파일은 따로 저장되지 않습니다.</p>
                <FileForm />
                <div className={styles.txt}></div>
            </div>
        </Popup>
    )
}

export default ExcelUploadPopup;
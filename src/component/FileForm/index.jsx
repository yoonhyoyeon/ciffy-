import { useState } from 'react';
import styles from './index.module.css';
import Button from '@/component/Button';

const FileForm = () => {
    const [ uploadedFile,setUploadedFile ] = useState(null);
    const [ focus, setFocus ] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', uploadedFile);
        const response = await fetch(`api/upload-excel?student_id=${JSON.parse(localStorage?.getItem('user_info')).id}`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
            },
            body: formData
        });
        const result = await response.json();
        console.log(result);
        if(!response.ok) { 
            if(result.detail.startsWith("Database error: 1062 (23000)")) {
                alert("기이수 과목이 이미 최신 상태입니다.");
                location.reload(true);
            }
            else {
                alert("ERROR: 정상적으로 업데이트되지 않았습니다.");
                console.log(result.detail);
            }
        } 
        else {
            alert('정상적으로 업데이트 되었습니다:)');
            location.reload(true);
        }
    }
    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        
        setUploadedFile(file);
        console.log(uploadedFile);
    };
    const handleDragEnter = (e) => {
        setFocus(true);
    }
    const handleDragLeave = (e) => {
        setFocus(false);
    }
    return (
        <form
            className={styles.form}
            name="excel"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
        >
            <label 
                htmlFor="excel"
                onDragEnter={handleDragEnter}    
                onDragLeave={handleDragLeave}
                className={focus||uploadedFile!==null ? styles.focus : null}
            >
                <input
                    id="excel"
                    name="excel"
                    type="file"
                    accept=".xlsx, .xls, .csv"
                    onChange={handleUpload}
                />
                <img src="/images/file-upload-icon.png"/> 
                이곳에 엑셀 파일을 놓아주세요.</label>
            <Button size="small" >업로드</Button>
        </form>
        
    )
}

export default FileForm;
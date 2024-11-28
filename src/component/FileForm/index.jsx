import { useState } from 'react';
import styles from './index.module.css';
import Button from '@/component/Button';

const FileForm = () => {
    const [ uploadedFile,setUploadedFile ] = useState('heelo');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', uploadedFile);
        const response = await fetch('api/upload-excel', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
            },
            body: formData
        });
        const result = await response.json();
        console.log(result);
        if(!response.ok) { 
            alert(result.detail);
        } 
        else {
            alert('정상적으로 업데이트 되었습니다.');
            location.reload(true);
        }
    }
    const handleUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        
        setUploadedFile(file);
        console.log(uploadedFile);
      };
    return (
        <form
            className={styles.form}
            name="excel"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
        >
            <input
                id="excel"
                name="excel"
                type="file"
                accept=".xlsx, .xls, .csv"
                onChange={handleUpload}
            />
            <label for="excel"><img src="/images/file-upload-icon.png"/> 이곳에 엑셀 파일을 놓아주세요.</label>
            <Button size="small" >업로드</Button>
        </form>
        
    )
}

export default FileForm;
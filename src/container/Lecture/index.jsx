"use client"

import { useState, useEffect } from 'react';
import SearchInput from "@/component/SearchInput";
import SortSelect from "@/component/SortSelect";
import styles from "./index.module.css"
import LecturesList from './LecturesList';
import { getSearchedLectures } from '@/utils';

const Lecture = ({lectures_data}) => {
    const [ value, setValue ] = useState('');
    const [ sort, setSort ] = useState('0');
    const [ lectures, setLectures ] = useState();

    useEffect(() => {
        setLectures(lectures_data);
    },[lectures_data]);

    const onSubmit = () => {
        setLectures(getSearchedLectures(lectures_data, value));
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>강의 후기</h1>
                <div className={styles.input_wrap}>
                    <SearchInput 
                        placeholder="과목명 또는 교수명을 입력하세요" 
                        setValue={setValue} 
                        onSubmit={onSubmit} 
                    />
                </div>
            </div>
            <div className={styles.contents} >
                <div className={styles.sort_row}>
                    <SortSelect value={sort} setSort={setSort}>
                        <option value="0">많이 담은 순</option>
                        <option value="1">평점 순</option>
                        <option value="2">이름 순</option>
                    </SortSelect>
                </div>
                <LecturesList 
                    lectures={lectures}
                />
            </div>
        </div>
    )
}

export default Lecture;
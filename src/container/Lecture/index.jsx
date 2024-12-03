"use client"

import { useState, useEffect } from 'react';
import SearchInput from "@/component/SearchInput";
import SortSelect from "@/component/SortSelect";
import styles from "./index.module.css"
import LecturesList from './LecturesList';
import { getSearchedLectures } from '@/utils';
import Loading from '@/container/Loading';
import { useSearchParams, useRouter } from 'next/navigation';

const Lecture = ({lectures_data}) => {
    const [ value, setValue ] = useState('');
    const [ sort, setSort ] = useState('0');
    const [ lectures, setLectures ] = useState();
    const [ keyword, setKeyword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setLectures(lectures_data);
    },[lectures_data]);
    useEffect(() => {
        const keyword_params=searchParams.get('keyword');
        if(keyword_params) {
            setValue(keyword_params);
            setKeyword(keyword_params);
        }
        submit(keyword_params);
    }, [sort, searchParams, keyword]);

    const submit = async (keyword_params) => {
        setLoading(true);
        setLectures(await getSearchedLectures(lectures_data, keyword_params, sort));
        setKeyword(value);
        setLoading(false);
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>강의 후기</h1>
                <div className={styles.input_wrap}>
                    <SearchInput 
                        placeholder="과목명 또는 교수명을 입력하세요" 
                        setValue={setValue}
                        value={value}
                        onSubmit={() => {
                            router.replace(`/lecture?keyword=${value}`);
                            submit(value);
                        }} 
                    />
                </div>
            </div>
            <div className={styles.contents} >
                <div className={styles.sort_row}>
                    <SortSelect 
                        disabled={lectures?.length===0}
                        value={sort} 
                        setSort={setSort}
                    >
                        <option value="0">평점 순</option>
                        <option value="1">이름 순</option>
                    </SortSelect>
                </div>
                { !loading ? 
                        <LecturesList 
                            lectures={lectures}
                            keyword={keyword}
                    /> : <Loading />
                }
            </div>
        </div>
    )
}

export default Lecture;
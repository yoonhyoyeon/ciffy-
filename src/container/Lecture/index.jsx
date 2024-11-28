"use client"

import { useEffect, useState } from 'react';
import SearchInput from "@/component/SearchInput";
import SortSelect from "@/component/SortSelect";
import ReviewItem from "@/component/ReviewItem";
import styles from "./index.module.css"
import Link from 'next/link';

const Lecture = () => {
    const [ value, setValue ] = useState('');
    const [ sort, setSort ] = useState('0');
    const [ lectures, setLectures ] = useState([]);
    useEffect(async() => {
        const response = await fetch('/api/courses');
        const result = await response;
        console.log(result);
    }, []);
    const onSubmit = (value) => {
        console.log(value);
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>강의 후기</h1>
                <div className={styles.input_wrap}>
                    <SearchInput 
                        placeholder="과목명 또는 교수명을 입력하세요" 
                        value={value} 
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
                <div className={styles.item_wrap}>
                    <Link href="/lecture/detail/123"><ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인."/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="환경화학" professor="정슬기" rating={4.1} preview="화학을 잘 못하는 저도 잘 이해할 수 있게 설명도 너무 잘해주시고 ppt도 이해가 잘돼서 좋았어요!! 화학을 잘 못하는 저도 잘 이해할 수 있게 설명도 너무 잘해주시고 ppt도 이해가 잘돼서 좋았어요!!"/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="일본어1" professor="윤석임" rating={2.8} preview="과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것  과제도 교재 본문 읽고 녹음하는거라 어렵지 않고 한자를 안써도 돼서 좋습니다. 수업 잘 듣고 본문 잘 외우면 괜찮은 것 "/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="한국현대사의이해" professor="김유진" rating={3.2} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="유체역학" professor="이민형" rating={1.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="건축기계설비시스템" professor="성민기" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/></Link>
                    <Link href="/lecture/detail/123"><ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Lecture;
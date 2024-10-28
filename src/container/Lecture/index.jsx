"use client"

import { useState } from 'react';
import SearchInput from "@/component/SearchInput";
import SortSelect from "@/component/SortSelect";
import ReviewItem from "@/component/ReviewItem";
import styles from "./index.module.css"

const Lecture = () => {
    const [ value, setValue ] = useState('');
    const [ sort, setSort ] = useState('0');
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
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인."/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={4.1} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={2.8} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={3.2} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={1.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                    <ReviewItem name="수요집현강좌" professor="이석배" rating={4.5} preview="보고서 시간 맞춰서 제출하고 출튀만 안 하면 안정적으로 통과 가능하다. 유체크 이의신청 반영 절대 안 해주시니 출결은 본인"/>
                </div>
            </div>
        </div>
    )
}

export default Lecture;
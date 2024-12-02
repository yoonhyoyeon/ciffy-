/* 강의 중 조건에 맞는 강의 반환 */
export const getSearchedLectures = async (lectures_data, keyword, sort) => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    const searchedLectures = lectures_data?.filter((v) => {
        if (v.course_name.indexOf(keyword) != -1) return true;
        else {
            if(v.professor.indexOf(keyword) != -1) return true;
            else return false;
        }
    });
    if(sort === "0") return searchedLectures.sort((a,b) => b.avg_rating - a.avg_rating);
    else if(sort === "1") return searchedLectures.sort((a, b) => a.course_name.toLowerCase() < b.course_name.toLowerCase() ? -1 : 1);;
}

/* 리뷰 카운트해서 배열로 반환 */
export const countReviewValues = (target, reviews, field_cnt) => {
    let result=new Array(field_cnt).fill(0);
    reviews?.forEach((v) => {
        return result[field_cnt-v[target]]+=1;
    });
    return result;
}

/* FA or F or NP 판별 */
export const isFailedLecture = (lecture) => {
    return lecture.grade_detail === "FA" || lecture.grade_detail === "NP" || lecture.grade_detail === "F";
}
export const getTakedCredit = (takedLectures) => {
    return takedLectures.reduce((acc, v) => !isFailedLecture(v) ? acc+v.credit : acc, 0)
}

/* 기이수과목 "졸업요건 페이지" 양식에 맞게 데이터 가공해서 반환 */
export const transformTakedLectures = (takedLectures) => {
    const filtered1 = takedLectures.filter((v) => v.course_type==="전필"&&!isFailedLecture(v));
    const filtered2 = takedLectures.filter((v) => v.course_type==="전선"&&!isFailedLecture(v));
    const filtered3 = takedLectures.filter((v) => v.course_type.startsWith("교선")&&!isFailedLecture(v));
    const filtered4 = takedLectures.filter((v) => (v.course_type==="공필"||v.course_type==="교필")&&!isFailedLecture(v));
    const filtered5 = takedLectures.filter((v) => (v.course_type==="기필"||v.course_type==="기교")&&!isFailedLecture(v));

    return [
        {
            id: 0,
            title: '전체',
            max: 140,
            data: getTakedCredit(takedLectures),
            takedLectures: takedLectures,
        },
        {
            id: 1,
            title: '전공 필수',
            max: 33,
            data: getTakedCredit(filtered1),
            takedLectures: filtered1
        },
        {
            id: 2,
            title: '전공 선택',
            max: 39,
            data: getTakedCredit(filtered2),
            takedLectures: filtered2
        },
        {
            id: 3,
            title: '교양 선택',
            max: 21,
            data: getTakedCredit(filtered3),
            takedLectures: filtered3
        },
        {
            id: 4,
            title: '공통 교향 필수',
            max: 14,
            data: getTakedCredit(filtered4),
            takedLectures: filtered4
        },
        {
            id: 5,
            title: '학문 기초 교양 필수',
            max: 9,
            data: getTakedCredit(filtered5),
            takedLectures: filtered5
        },
        {
            id: 6,
            title: '영어 졸업 인증',
            max: -1,
        }
    ];
}

export const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
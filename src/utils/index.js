import { GRADUATION_RQUIRED1, GRADUATION_RQUIRED2, GRADUATION_RQUIRED3, GRADUATION_RQUIRED4, WEEK } from '@/constants';

export const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* 강의 중 조건에 맞는 강의 반환 */
export const getSearchedLectures = async (lectures_data, keyword, sort) => {
    await new Promise((resolve) => setTimeout(resolve, rand(100,400)));
    const searchedLectures = lectures_data?.filter((v) => {
        if (v.course_name.indexOf(keyword) != -1) return true;
        else {
            if(v.professor.indexOf(keyword) != -1) return true;
            else return false;
        }
    });
    if(sort === "0") return searchedLectures.sort((a,b) => b.avg_rating - a.avg_rating);
    else if(sort === "1") return searchedLectures.sort((a, b) => a.course_name.toLowerCase() < b.course_name.toLowerCase() ? -1 : 1);
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
    return takedLectures.reduce((acc, v) => isFailedLecture(v) ? acc : acc+v.credit, 0)
}

/* course_name을 이름으로 가지는 강의가 Lectures 배열에 있는 지 확인 */
export const findLecture = (course_name, Lectures) => {
    const result = Lectures.find((el) => el.course_name === course_name);
    return result!==undefined;
}

/* 기이수과목 "졸업요건 페이지" 양식에 맞게 데이터 가공해서 반환 */
export const transformTakedLectures = (takedLectures) => {
    
    let taked1 = [];
    let taked2 = [];
    let taked3 = [];
    let taked4 = [];
    let taked5 = [];
    takedLectures.forEach((v) => {
        if(!isFailedLecture(v)) {
            if(v.course_type==="전필") taked1.push(v);
            else if(v.course_type==="전선") taked2.push(v);
            else if(GRADUATION_RQUIRED2.find((el) => el.course_name===v.course_name)) taked4.push(v);
            else if(GRADUATION_RQUIRED3.find((el) => el.course_name===v.course_name||v.course_name==='일반물리학1')) taked5.push(v);
            else taked3.push(v);
        }
    });
    console.log(taked3);
    // const taked1 = takedLectures.filter((v) => v.course_type==="전필"&&!isFailedLecture(v)); // 전필
    // const taked2 = takedLectures.filter((v) => v.course_type==="전선"&&!isFailedLecture(v)); // 전선
    // const taked3 = takedLectures.filter((v) => v.course_type.startsWith("교선")&&!isFailedLecture(v)); // 교선
    // const taked4 = takedLectures.filter((v) => {
    //     return GRADUATION_RQUIRED2.find((el) => el.course_name===v.course_name)&&!isFailedLecture(v)
    // }); // 공통교양필수
    // const taked5 = takedLectures.filter((v) => {
    //     return GRADUATION_RQUIRED3.find((el) => el.course_name===v.course_name||v.course_name==='일반물리학1')&&!isFailedLecture(v)
    // }); // 학문기초교양필수

    const recommended1 = GRADUATION_RQUIRED4.filter((v) => {
        return !findLecture(v.course_name, taked1);
    }); ///전필 추천
    const recommended2 = GRADUATION_RQUIRED1.filter((v) => {
        return !findLecture(v.course_name, taked3);
    }); ///교선 추천
    const recommended3 = GRADUATION_RQUIRED2.filter((v) => {
        return !findLecture(v.course_name, taked4);
    }); ///공통교양필수 추천
    const recommended4 = GRADUATION_RQUIRED3.filter((v) => {
        return !findLecture(v.course_name, taked5)&&v.course_name!=='일반물리학및실험1';
    }); ///학문기초교양필수 추천

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
            data: getTakedCredit(taked1),
            takedLectures: taked1,
            requiredLectures: GRADUATION_RQUIRED4,
            recommendedLectures: recommended1,
        },
        {
            id: 2,
            title: '전공 선택',
            max: 39,
            data: getTakedCredit(taked2),
            takedLectures: taked2,
        },
        {
            id: 3,
            title: '교양 선택',
            max: 21,
            data: getTakedCredit(taked3),
            takedLectures: taked3,
            requiredLectures: GRADUATION_RQUIRED1,
            recommendedLectures: recommended2,
        },
        {
            id: 4,
            title: '공통 교양 필수',
            max: 8,
            data: taked4.length,
            takedLectures: taked4,
            requiredLectures: GRADUATION_RQUIRED2,
            recommendedLectures: recommended3,
        },
        {
            id: 5,
            title: '학문 기초 교양 필수',
            max: 3,
            data: taked5.length,
            takedLectures: taked5,
            requiredLectures: GRADUATION_RQUIRED3,
            recommendedLectures: recommended4,
        },
        {
            id: 6,
            title: '영어 졸업 인증',
            max: -1,
            data: 0
        }
    ];
}

export const convertTimeForm = (time) => { //12:00~13:00 -> Object
    return time.split(/~|:/)
}

export const transformTimetable = (timetable) => {
    let result = {
        choice_id: timetable.choice_id,
        mon: [

        ],
        tue: [

        ],
        wed: [

        ],
        thu: [

        ],
        fri: [

        ],
        online: [

        ]
    }
    timetable.timetable.forEach((v, i) => {
        const time_data=v.time.split(' ');
        const time_arr = convertTimeForm(time_data[time_data.length-1])
        time_data.forEach((time, i) => {
            if(i<time_data.length-1) result[WEEK[time]].push({
                name: v.course_name,
                professor: v.professor,
                classroom: v.location,
                time: {
                    start: parseInt(time_arr[0]) + parseInt(time_arr[1])/60,
                    end: parseInt(time_arr[2]) + parseInt(time_arr[3])/60
                },
                credit: v.credits
            })
        });
    });
    console.log(result);
    return result;
}

export const transformCourseType = (type) => {
    if(type==='전공필수') return '전필';
    else if(type==='전공선택') return '전선';
    else if(type==='균형교양필수') return '균필';
    else if(type==='교양필수') return '교필';
    else if(type==='교양선택1') return '교선1';
    else if(type==='교양선택2') return '교선2';
    else if(type==='학문기초교양필수') return '기교';
    else if(type==='교양') return '교양';
    else return type;
}
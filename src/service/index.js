import { setCookie, getCookie } from 'cookies-next';

export const login = async (id, pw) => {
    const response = await fetch('api/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `student_id=${id}&password=${pw}`,
    });
    const result = await response.json();

    if(!response.ok) { //로그인 실패
        if(result.detail) {
            alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
        }
        else {
            alert('로그인 ERROR');
        }
    } 
    else { //로그인 성공
        const option = {
            maxAge: 3600 * 24 * 14 //14일
        }

        /* access_token 발급 */
        const res_accessToken = await fetch('api/token/refresh', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `refresh_token=${result.refresh_token}`,
        });
        const result_accessToken = await res_accessToken.json();

        //쿠키에 토큰 저장
        setCookie('refresh_token', result.refresh_token, option);
        setCookie('access_token', result_accessToken.access_token, option);
        location.reload(true);
    }
};

export const getLecturesData = async () => {
    const response = await fetch(`${process.env.API_URL}/api/courses`);
    const result = await response.json();
    if(result.status==='success') return result.data;
    else {
        console.log('강의 불러오기 실패: ', result);
        return [];
    }
}

export const getLectureReviews= async (course_id) => {
    const response = await fetch(`${process.env.API_URL}/api/courses/${course_id}/comments`);
    const result = await response.json();
    if(result.status==='success') return result.data;
    else {
        console.log('강의 리뷰 불러오기 실패: ', result);
        return [];
    }
}

export const addLectureReview = async (course_id, student_id, review_text, rating, assignment, group_work, grading) => {
    const response = await fetch('/api/course/review', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            course_id,
            student_id,
            review_text,
            rating,
            assignment,
            group_work,
            grading
        })
    });
    const result = await response.json();
}

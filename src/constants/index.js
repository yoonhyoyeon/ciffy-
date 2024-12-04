export const ASSIGNMENT_FIELD = ['없음', '보통', '많음'];
export const TEAM_FIELD = ['없음', '보통', '많음'];
export const GRADE_FIELD = ['너그러움', '보통', '깐깐함'];

export const SURVEY_QUESTON = [
    '아침 수업이 적었으면 좋겠다.', 
    '시험보단 과제로 평가가 되었으면 좋겠다.', 
    '수업 내용이 실제 업무에 도움이 되는 수업을 선호한다.', 
    '수업이 이론보다는 실습 위주로 진행되면 좋겠다.', 
    '영어 수업을 선호한다.', 
    '후기가 많은 과목이 좋다.', 
    '졸업을 위한 필수 과목을 많이 들어야한다.', 
    '교양이 많았으면 좋겠다.' ,
    '시험이 어려운 수업이 좋다.', 
    '공강이 최대한 확보되었으면 좋겠다.',
];

export const LAODING_MESSAGE = [
    '시피가 설문을 분석 중이에요!',
    '시피가 졸업요건을 분석 중이에요!',
    '시피가 강의정보를 확인 중이에요!',
    '시피가 시간표를 계산 중이에요!',
    '시피가 곧 시간표를 추천 드릴게요!',
];

export const GRADUATION_RQUIRED1 = [ // 교양선택
    {
        course_code: 9489,
        course_name: '세계사: 인간과 문명',
        course_type: '교선',
        choice: '사상과역사',
        credit: 3
    },
    {
        course_code: 9790,
        course_name: '고급프로그래밍입문-P',
        course_type: '교선1',
        choice: '자연과과학기술',
        credit: 3
    },
    {
        course_code: 9936,
        course_name: 'Technical Writing기초',
        course_type: '교선',
        choice: '자연과과학기술',
        credit: 2
    },
];
export const GRADUATION_RQUIRED2 = [ //공통교양필수
    {
        course_code: 10352,
        course_name: 'English Listening Practice 1',
        course_type: '교필',
        choice: '',
        credit: 2
    },
    {
        course_code: 10354,
        course_name: 'English Reading Practice 1',
        course_type: '교필',
        choice: '',
        credit: 2
    },
    {
        course_code: 11110,
        course_name: '신입생세미나',
        course_type: '교필',
        choice: '',
        credit: 1
    },
    {
        course_code: 10351,
        course_name: '대학생활과진로설계',
        course_type: '교필',
        choice: '역량강화',
        credit: 1
    },
    {
        course_code: 9030,
        course_name: '취업역량개발론',
        course_type: '교필',
        choice: '역량강화',
        credit: 1
    },
    {
        course_code: 9045,
        course_name: '창업과기업가정신1',
        course_type: '공필',
        choice: '',
        credit: 1
    },
    {
        course_code: 9067,
        course_name: '문제해결을위한글쓰기와발표',
        course_type: '공필',
        choice: '',
        credit: 3
    },
    {
        course_code: 9068,
        course_name: '서양철학:쟁점과토론',
        course_type: '공필',
        choice: '',
        credit: 3
    },
];

export const GRADUATION_RQUIRED3 = [ //학문기초교양필수
    {
        course_code: 2647,
        course_name: '일반물리학및실험1',
        course_type: '기교',
        choice: '생명과 과학',
        credit: 3
    },
    {
        course_code: 304,
        course_name: '공업수학1',
        course_type: '기필',
        choice: '',
        credit: 3
    },
    {
        course_code: 6098,
        course_name: '기초미적분학',
        course_type: '기필',
        choice: '자연과과학기술',
        credit: 3
    },
];


export const GRADUATION_RQUIRED4 = [ //전공필수
    {
        course_code: 9912,
        course_name: 'C프로그래밍및실습',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 9913,
        course_name: '고급C프로그래밍및실습',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 9914,
        course_name: '공학설계기초',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 4118,
        course_name: '디지털시스템',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 9952,
        course_name: '자료구조및실습',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 3278,
        course_name: '컴퓨터구조',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 4310,
        course_name: '운영체제',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 3278,
        course_name: '컴퓨터구조',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 3284,
        course_name: '컴퓨터네트워크',
        course_type: '전필',
        choice: '',
        credit: 3
    },
    {
        course_code: 3284,
        course_name: 'Capstone디자인(산학협력프로젝트)',
        course_type: '전필',
        choice: '',
        credit: 6
    },
];

export const GraduationTitle = {
    0: '전체',
    1: '전공필수',
    2: '전공선택',
    3: '교양선택',
    4: '공통교양필수',
    5: '학문기초교양필수',
    6: '영어졸업인증',
};

export const WEEK = {
    "월": "mon",
    "화": "tue",
    "수": "wed",
    "목": "thu",
    "금": "fri",
}

export const garadata = [
    {
      "choice_id": 1,
      "timetable": [
        {
          "department": "컴퓨터공학과",
          "course_name": "이산수학및프로그래밍",
          "type": "전공선택",
          "credits": 3.0,
          "time": "화 목 10:30~12:00",
          "location": "센B209",
          "professor": "김해광"
        },
        {
          "department": "소프트웨어학과",
          "course_name": "선형대수및프로그래밍",
          "type": "전공선택",
          "credits": 3.0,
          "time": "화 목 13:30~15:00",
          "location": "센B114",
          "professor": "이종원"
        },
        {
          "department": "소프트웨어학과",
          "course_name": "컴퓨터그래픽스",
          "type": "전공선택",
          "credits": 3.0,
          "time": "월 수 12:00~13:30",
          "location": "센B111",
          "professor": "박상일"
        },
        {
          "department": "컴퓨터공학과",
          "course_name": "Unix프로그래밍",
          "type": "전공선택",
          "credits": 3.0,
          "time": "월 수 15:00~17:00",
          "location": "센B201",
          "professor": "노재춘"
        },
        {
          "department": "대양휴머니티칼리지",
          "course_name": "동서양의사상과윤리",
          "type": "균형교양필수",
          "credits": 3.0,
          "time": "화 18:00~19:00",
          "location": "광207",
          "professor": "박승원"
        },
        {
          "department": "대양휴머니티칼리지",
          "course_name": "경영학",
          "type": "균형교양필수",
          "credits": 3.0,
          "time": "목 18:00~19:00",
          "location": "집301",
          "professor": "이지훈"
        },
        {
          "department": "대양휴머니티칼리지",
          "course_name": "지구환경과기후변화",
          "type": "균형교양필수",
          "credits": 3.0,
          "time": "목 19:00~20:00",
          "location": "광202",
          "professor": "전의찬"
        }
      ]
    },
    {
      "choice_id": 2,
      "timetable": [
        {
          "department": "컴퓨터공학과",
          "course_name": "선형대수및프로그래밍",
          "type": "전공선택",
          "credits": 3.0,
          "time": "월 수 12:00~13:30",
          "location": "센B103",
          "professor": "Mohammad Jalil Piran"
        },
        {
          "department": "대양휴머니티칼리지",
          "course_name": "동서양의사상과윤리",
          "type": "균형교양필수",
          "credits": 3.0,
          "time": "화 18:00~19:00",
          "location": "광207",
          "professor": "박승원"
        },
        {
          "department": "대양휴머니티칼리지",
          "course_name": "생명과학의이해",
          "type": "균형교양필수",
          "credits": 3.0,
          "time": "목 19:00~20:00",
          "location": "광208",
          "professor": "임태규"
        },
        {
          "department": "소프트웨어학과",
          "course_name": "데이터베이스프로그래밍",
          "type": "전공선택",
          "credits": 3.0,
          "time": "화 목 10:30~12:00",
          "location": "센B112",
          "professor": "변재욱"
        },
        {
          "department": "컴퓨터공학과",
          "course_name": "문제해결및실습:JAVA",
          "type": "전공선택",
          "credits": 3.0,
          "time": "수 금 09:00~10:30",
          "location": "센B203",
          "professor": "Rajendra Dhakal"
        },
        {
          "department": "소프트웨어학과",
          "course_name": "소프트웨어공학",
          "type": "전공선택",
          "credits": 3.0,
          "time": "화 목 09:00~10:30",
          "location": "센B114",
          "professor": "이경호"
        }
      ]
    },
    {
      "choice_id": 3,
      "timetable": [
        {
          "department": "대양휴머니티칼리지",
          "course_name": "융합예술의이해",
          "type": "균형교양필수",
          "credits": 3.0,
          "time": "화 19:00~20:00",
          "location": "집301",
          "professor": "박철"
        },
        {
          "department": "대양휴머니티칼리지",
          "course_name": "미디어빅뱅과방송",
          "type": "균형교양필수",
          "credits": 3.0,
          "time": "목 18:00~19:00",
          "location": "집401",
          "professor": "신하얀"
        },
        {
          "department": "소프트웨어학과",
          "course_name": "선형대수및프로그래밍",
          "type": "전공선택",
          "credits": 3.0,
          "time": "화 목 13:30~15:00",
          "location": "센B114",
          "professor": "이종원"
        },
        {
          "department": "대양휴머니티칼리지",
          "course_name": "대학영어",
          "type": "공통교양필수",
          "credits": 3.0,
          "time": "금 11:00~13:00",
          "location": "Lab-D",
          "professor": "옥성수"
        },
        {
          "department": "경영학부",
          "course_name": "원가회계",
          "type": "전공선택",
          "credits": 3.0,
          "time": "월 수 15:00~16:30",
          "location": "광429",
          "professor": "황세준"
        },
        {
          "department": "컴퓨터공학과",
          "course_name": "XML프로그래밍",
          "type": "전공선택",
          "credits": 3.0,
          "time": "월 수 10:30~12:00",
          "location": "센B206",
          "professor": "윤은일"
        },
        {
          "department": "컴퓨터공학과",
          "course_name": "인공지능",
          "type": "전공선택",
          "credits": 3.0,
          "time": "화 목 12:00~13:30",
          "location": "센B103",
          "professor": "Mohammad Jalil Piran"
        }
      ]
    }
]

export const aaaaa = [
    {
      "department": "대양휴머니티칼리지",
      "course_name": "경영학",
      "type": "균형교양필수",
      "credits": 3,
      "time": "목 18:00~19:00",
      "location": "집301",
      "professor": "이지훈"
    },
    {
      "department": "대양휴머니티칼리지",
      "course_name": "현대사회와법",
      "type": "균형교양필수",
      "credits": 3,
      "time": "목 18:00~19:00",
      "location": "집502",
      "professor": "이재교"
    },
    {
      "department": "대양휴머니티칼리지",
      "course_name": "성서와기독교",
      "type": "균형교양필수",
      "credits": 3,
      "time": "화 18:00~19:00",
      "location": "광203",
      "professor": "이태하"
    },
    {
      "department": "컴퓨터공학과",
      "course_name": "선형대수및프로그래밍",
      "type": "전공선택",
      "credits": 3,
      "time": "화 목 10:30~12:00",
      "location": "센B103",
      "professor": "이영렬"
    },
    {
      "department": "컴퓨터공학과",
      "course_name": "문제해결및실습:JAVA",
      "type": "전공선택",
      "credits": 3,
      "time": "화 목 13:30~15:00",
      "location": "센B202",
      "professor": "김도년"
    },
    {
      "department": "소프트웨어학과",
      "course_name": "데이터베이스프로그래밍",
      "type": "전공선택",
      "credits": 3,
      "time": "화 목 10:30~12:00",
      "location": "센B112",
      "professor": "변재욱"
    },
    {
      "department": "소프트웨어학과",
      "course_name": "이산수학및프로그래밍",
      "type": "전공선택",
      "credits": 3,
      "time": "월 수 12:00~13:30",
      "location": "센B112",
      "professor": "이은상"
    }
  ]
export const timetableList = [
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
    {
        mon: [
            {
                name: '린스타트업',
                profeccer: '윤성주',
                classroom: '광204',
                time: {
                    start: 9,
                    end: 12
                },
            },
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집502',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '디자인재료및성형기법',
                profeccer: '김진성',
                classroom: '진603',
                time: {
                    start: 14,
                    end: 18
                },
            },
        ],
        tue: [
        ],
        wed: [
            {
                name: '일본어2',
                profeccer: '김영주',
                classroom: '집503',
                time: {
                    start: 12,
                    end: 13.5
                },
            },
            {
                name: '기초3D그래픽스',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        thu: [
            {
                name: '타입&이미지',
                profeccer: '고숙',
                classroom: '진511',
                time: {
                    start: 15,
                    end: 18
                },
            },
        ],
        fri: [
            {
                name: '서양영화사',
                profeccer: '김충국',
                classroom: '광1213',
                time: {
                    start: 14,
                    end: 17
                },
            },
        ],
        online: [
            {
                name: '서양고전강독4'
            }
        ]
    },
];

"use client"
import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimetableSlider from '@/component/TimetableSlider';
import Button from '@/component/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const TimetableSelect = () => {
    const router = useRouter();

    const timetables = [
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
                    name: '일본어',
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
                    name: '일본어',
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
                    name: '일본어',
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
                    name: '일본어',
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
                    name: '일본어',
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
                    name: '일본어',
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
                    name: '일본어',
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
                    name: '일본어',
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
                    name: '일본어',
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
    ]
    const data = btoa(encodeURIComponent(JSON.stringify(timetables)));
    
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <h1 className={styles.title}>시간표 완성!</h1>
                <TimetableSlider timetables={timetables}/>
                <Button 
                    size="small" 
                    customStyles={{padding: '10px 50px', fontSize: '16px'}}
                    onClick={() => { router.push('/timetable/create/select/detail') }}
                >
                    시간표 선택
                </Button>
            </div>
        </div>
    );
}

export default TimetableSelect;
"use client"
import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Timetable from '@/component/Timetable';
import { useEffect, useState } from 'react';

const NextArrow = ({ className, style, onClick }) => {
    return (
        <img 
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            src="/images/right-arrow-icon.png" 
        />
    )
}
const PrevArrow = ({ className, style, onClick }) => {
    return (
        <img 
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            src="/images/left-arrow-icon.png" 
        />
    )
}
const TimetableSlider = ({ timetables, selected, setSelected }) => {
    const [ slickSlider, setSlickSlider ] = useState(null);
    const [ isInit, setIsInit ] = useState(false);
    useEffect(() => { slickSlider?.slickGoTo(selected) }, [isInit])
    const onInit = () => setIsInit(true);
    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToScroll: 4,
        slidesToShow: 4,
        initialSlide: selected,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ],
    };

    return (
        <div className={styles.container}>
            <Slider 
                ref={ slider => setSlickSlider( slider ) }
                {...settings}
                onInit={onInit}
            >
                {
                    timetables.map((v, i) => (
                        <div key={i}><Timetable setSelected={() => setSelected(i)} selected={i===selected} data={v} /></div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default TimetableSlider;
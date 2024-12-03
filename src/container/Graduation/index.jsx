"use client"
import Link from 'next/link';
import styles from './index.module.css';
import GraduationProgress from '@/component/GraduationProgress';
import TotalGraduate from '@/component/TotalGraduate';
import UserInfo from '@/component/UserInfo';
import { useState, useEffect } from 'react';

const Graduation = ({data}) => {
    
    const [ userinfo, setUserinfo ] = useState({});
    useEffect(() => {
        setUserinfo(JSON.parse(localStorage?.getItem('user_info')));
    }, []);
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>졸업요건 분석</h1>
            <UserInfo userinfo={userinfo}/>
            <TotalGraduate dataobj={data[0]}/>
            { data.map((v, i) => i!==0 ? (<Link href={`/graduation/detail/${v.id}`} key={i}><GraduationProgress data={v} /></Link>) : null) }
        </div>
    );
}

export default Graduation;
import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import { useSelector } from 'react-redux';

const Experience = () => {

    const title = useSelector((state) => state.lang.experience.title); 

    return (
        <div className={`${style.page} column`}>
            <Title variant={title}/>
        </div>
    );
};

export default Experience;
import React from 'react';
import { useSelector } from 'react-redux';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';

const Skills = () => {

    const title = useSelector((state) => state.lang.skills.title); 

    return (
        <div className={`${style.page} column`}>
            <Title variant={title}/>
        </div>
    );
};

export default Skills;
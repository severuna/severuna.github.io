import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';

const Skills = () => {
    return (
        <div className={`${style.content} column`}>
            <Title variant={'Skills'}/>
        </div>
    );
};

export default Skills;
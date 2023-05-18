import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';


const Experience = () => {
    return (
        <div className={`${style.page} column`}>
            <Title variant={'Experience'}/>
        </div>
    );
};

export default Experience;
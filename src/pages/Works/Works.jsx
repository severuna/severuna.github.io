import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';

const Works = () => {
    return (
        <div className={`${style.page} column`}>
            <Title variant={'Works'}/>
        </div>
    );
};

export default Works;
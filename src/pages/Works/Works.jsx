import React from 'react';
import { useSelector } from 'react-redux';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import './Works.css';

const Works = ( ) => {

    const WORKS_LIST = useSelector((state) => state.lang.works); 

    return (
        <div className={`${style.page} column`}>
            <Title variant={WORKS_LIST.title}/>
        </div>
    );
};

export default Works;
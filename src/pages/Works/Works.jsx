import React from 'react';
import { useSelector } from 'react-redux';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import './Works.css';
import WorkItem from './WorkItem/WorkItem';

const Works = ( ) => {

    const WORKS_LIST = useSelector((state) => state.lang.works); 

    let elements = [];

    WORKS_LIST.list.forEach((element) => {
        elements.push(<WorkItem key={element.id + Math.random()} {...element} />)
    });
    
    return (
        <div className={`${style.page} column`}>
            <Title variant={WORKS_LIST.title}/>
            <div className='works column'>
                {elements}
            </div>
        </div>
    );
};

export default Works;
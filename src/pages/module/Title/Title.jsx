import React from 'react';
import style from './Title.module.css';

const Title = ( { variant = 'Home'} ) => {

    return (
        <div className={`${style.container} row`}>
            <h1 className={style.title}>{variant}</h1>
        </div>
    );
};

export default Title;
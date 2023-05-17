import React from 'react';
import style from './Title.module.css';

const Title = ( {content} ) => {
    return (
        <>
            <h1 className={style.title}>{content}</h1>
        </>
    );
};

export default Title;
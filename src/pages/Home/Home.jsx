import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';

const Home = () => {
    return (
        <div className={`${style.content} column`}>
            <Title variant={'Home'} />
        </div>
    );
};

export default Home;
import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import './Home.css';
import home_img from './img/home_img.svg';

const Home = () => {
    return (
        <div className={`${style.page} column`}>
            <Title variant={'Home'} />
            <div className={`${style.content} home row`}>
                <div className='home-text column'>
                    <p>I'm</p>
                    <h1 className='name'>Oksana  Fomenkova</h1>
                    <p>Front-End React Developer</p>
                    <div className='home-text_contact row'>
                        
                    </div>
                </div>
                <img src={home_img} alt='home  pic' className='home-img' />
            </div>
        </div>
    );
};

export default Home;
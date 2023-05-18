import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
<<<<<<< HEAD
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
=======

const Home = () => {
    return (
        <div className={`${style.content} column`}>
            <Title variant={'Home'} />
>>>>>>> a7d5c72ef9951687df024708ec2ac45f435027e3
        </div>
    );
};

export default Home;
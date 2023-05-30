import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import './Home.css';
import home_img from './img/home_img.svg';
import { useSelector } from 'react-redux';

const Home = () => {

    const HOME_LIST = useSelector((state) => state.lang.home); 

    return (
        <div className={`${style.page} column`}>
            <Title variant={HOME_LIST.title} />
            <div className={`${style.content} home row`}>
                <div className='home-text column'>
                    <p>{HOME_LIST.content[0]}</p>
                    <h1 className='name'>{HOME_LIST.content[1]}</h1>
                    <p>{HOME_LIST.content[2]}</p>
                    <div className='home-text_contact row'>
                        
                    </div>
                </div>
                <img src={home_img} alt='home  pic' className='home-img' />
            </div>
        </div>
    );
};

export default Home;
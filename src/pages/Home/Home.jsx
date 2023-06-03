import React from 'react';
import style from '../module/Page.module.css';
import './Home.css';
import home_img from './img/home_img.svg';
import resume from '../../assets/files/CV_Oksana_Fomenkova_Front-end_React_Developer.pdf';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

    const HOME_LIST = useSelector((state) => state.lang.home); 

    return (
        <div className={`${style.page} column`}>
            <div className={`${style.content} home row`}>
                <div className='home-text column'>
                    <p>{HOME_LIST.content[0]}</p>
                    <h1 className='name'>{HOME_LIST.content[1]}</h1>
                    <p>{HOME_LIST.content[2]}</p>
                    <div className='home-text__links row'>
                        <Link to='https://github.com/severuna' target='_blank' className='home-text__link'>Github</Link>
                        <Link to={resume} target='_blank' download={'CV_Oksana_Fomenkova_Front-end_React_Developer'} className='home-text__link'>CV</Link>
                    </div>
                </div>
                <img src={home_img} alt='home  pic' className='home-img' />
            </div>
        </div>
    );
};

export default Home;
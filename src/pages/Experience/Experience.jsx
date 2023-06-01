import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import { useSelector } from 'react-redux';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import './Experience.css';

const Experience = () => {

    const EXPERIENCE_LIST = useSelector((state) => state.lang.experience); 

    let work = [];

    EXPERIENCE_LIST.work.forEach((element) => {
        work.push(<ExperienceItem key={element.id + Math.random()} {...element} />);
    });

    let edu = [];

    EXPERIENCE_LIST.edu.forEach((element) => {
        edu.push(<ExperienceItem key={element.id + Math.random()} {...element} />);
    });

    return (
        <div className={`${style.page} column`}>
            <Title variant={EXPERIENCE_LIST.title}/>
            <div className='experience-container column'>
                <h2 className='experience-title'>{EXPERIENCE_LIST.subtitle[0]}</h2>
                {work}
            </div>
            <div className='experience-container column'>
                <h2 className='experience-title'>{EXPERIENCE_LIST.subtitle[1]}</h2>
                {edu}
            </div>
        </div>
    );
};

export default Experience;
import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ( props) => {
    return (
        <div className='experience-item column'>
            <h2 className='experience-item__title'>{props.title}</h2>
            <div className='experience-item__container row'>
                <p>{props.place ? props.place : props.spec}</p>
                |
                <p>{props.time}</p>
            </div>
            <p className='experience-item__description'>{props.description}</p>
        </div>
    );
};

export default ExperienceItem;
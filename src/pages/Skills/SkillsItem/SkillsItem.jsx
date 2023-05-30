import React from 'react';
import './SkillsItem.css';

const SkillsItem = ( props ) => {
    return (
        <div className='skill row'>
            <img src={props.src} alt={props.title} className='skill-img' />
            <h2 className='skill-title'>{props.title}</h2>
        </div>
    );
};

export default SkillsItem;
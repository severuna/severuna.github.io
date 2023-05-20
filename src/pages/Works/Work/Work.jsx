import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import temp_img from './img/r-n-w.png';

const Work = ( props ) => {
    return (
        <div className='work column'>
            <h1 className='work-title'>{props.title}</h1>
            <img src={temp_img} alt={props.title} className='work-img' />
            <div className='work-links row'>
                <Link to='' className='work-links__item'>More info</Link>
                <Link to={props.links.github} className='work-links__item'>View Github</Link>
                <Link to={props.links.live} target='_blank' className='work-links__item'>View Live</Link>
            </div>
        </div>
    );
};

export default Work;
import React, { useState, useEffect }from 'react';
import './WorkItem.css';
import { Link } from 'react-router-dom';

const WorkItem = ( props ) => {

    const [ imageCounter, setImageCounter] = useState(0);

    const work_images = props.imgs;

    useEffect(() => {
        const interval = setInterval(() => {
            let counter = imageCounter;
            if (counter === work_images.length - 1) {
                setImageCounter(0)
            } else {
                setImageCounter(counter => counter + 1);
            }
        }, 2500);
            return () => clearInterval(interval);
    }, [imageCounter]);

    let tools = [];

    props.tools.forEach((element) => {
        tools.push(<p className='tools-item'>{element}</p>);
    });

    let links = [];

    links.push(<Link to={props.src.github} target='_blank' className='links-item'>View Github</Link>);
    links.push(<Link to={props.src.live} target='_blank' className='links-item'>View Live</Link>);

    return (
        <div className='work row'>
            <div style={{backgroundImage : `url(${work_images[imageCounter]})`}} className='work-img' />
            <div className='work-description column'>
                <h2 className='work-description__title'>{props.title}</h2>
                <p className='work-description__subtitle'>{props.description}</p>
                <div className='tools row'>{tools}</div>
                <div className='links row'>{links}</div>
            </div>
        </div>
    );
};

export default WorkItem;
import React, { useState, useEffect } from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import './Works.css';
import Work from './Work/Work';

const Works = ( ) => {

    let [ currentIndex, setCurrentIndex ] = useState(0);

    // temp values
    const WORKS_ARR = [
        {
            id: 0,
            title: 'R-N-W',
            src: './img/r-n-w.png',
            tools: ['react', 'router', 'js', 'html', 'css'],
            description: 'Site of the company "R-N-W" using React Router technology.',
            links: {
                github: 'https://github.com/severuna/react_spa',
                live: 'https://severuna.github.io/react_spa/'
            }
        },
        {
            id: 1,
            title: 'Login / Register Form',
            src: './img/r-n-w.png',
            tools: ['sc', 'react', 'router', 'js', 'html', 'css'],
            description: 'Simple login and registration forms.',
            links: {
                github: 'https://github.com/severuna/react_styled',
                live: 'https://severuna.github.io/react_styled/'
            }
        },
        {
            id: 2,
            title: 'Posts',
            src: './img/r-n-w.png',
            tools: ['sc', 'react', 'router', 'js', 'html', 'css', 'redux'],
            description: 'Demonstration of a data array with the possibility to add to it. React Router and Redux technologies are used.',
            links: {
                github: 'https://github.com/severuna/react_reduxBase',
                live: 'https://severuna.github.io/react_reduxBase/'
            }
        },
    ];

    const prevSlide = ( e ) => {

        e.preventDefault();

        let counter = currentIndex - 1;
        
        if (counter === -1) {
            return setCurrentIndex(WORKS_ARR.length - 1)
        } else {
            return setCurrentIndex(counter)
        }

    };

    const nextSlide = ( e ) => {
        e.preventDefault();

        let counter = currentIndex + 1;

        if (counter === WORKS_ARR.length ) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(counter)
        }

    };

    useEffect(() => {
        setCurrentIndex(currentIndex)
    }, [currentIndex])
    return (
        <div className={`${style.page} column`}>
            <Title variant={'Works'}/>
            <div className='works row'>
                <button className='works-btn' onClick={(e) => prevSlide(e)}>{'<'}</button>
                <Work {...WORKS_ARR[currentIndex]}/>
                <button className='works-btn' onClick={(e) => nextSlide(e)}>{'>'}</button>
            </div>
        </div>
    );
};

export default Works;
import React from 'react';
import style from './Title.module.css';
import skills from './img/skills.svg';
import work from './img/work.svg';
import contacts from './img/contacts.svg';
import experience from './img/experience.svg';
import home from './img/home.svg';

const Title = ( { variant = 'Home'} ) => {

    const setLogo = () => {
        switch(variant) {
            case "Contacts": {
                return contacts;
            }
            case "Skills": {
                return skills;
            }
            case "Experience": {
                return experience;
            }
            case "Works": {
                return work;
            }

            default: {
                return home
            }
        }
    }
    return (
        <div className={`${style.container} row`}>
            <img src={setLogo()} alt={variant} className={`${style.logo}`}/>
            <h1 className={style.title}>{variant}</h1>
        </div>
    );
};

export default Title;
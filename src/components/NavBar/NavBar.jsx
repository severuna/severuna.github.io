import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const selectLang = (e, value) => {

        e.preventDefault();

        console.log(value)
    }
    
    return (
        <header className='header column'>
            <div className='lang row'>
                <button className='lang-btn' onClick={(e) => selectLang(e, 'en')}>EN</button>
                <button className='lang-btn' onClick={(e) => selectLang(e, 'ua')}>UA</button>
            </div>
            <NavLink to={`/`} className='header-item' activeClassName="active">Home</NavLink>
            <NavLink to={`/works`} className='header-item'>Works</NavLink>
            <NavLink to={`/skills`} className='header-item'>Skills</NavLink>
            <NavLink to={`/experience`} className='header-item'>Experience</NavLink>
            <NavLink to={`/contacts`} className='header-item'>Contacts</NavLink>
        </header>
    );
};

export default NavBar;
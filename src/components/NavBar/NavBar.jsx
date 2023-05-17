import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className='header column'>
            <NavLink to={`/`} className='header-item' activeClassName="active">Home</NavLink>
            <NavLink to={`/works`} className='header-item'>Works</NavLink>
            <NavLink to={`/skills`} className='header-item'>Skills</NavLink>
            <NavLink to={`/job`} className='header-item'>Job</NavLink>
            <NavLink to={`/contacts`} className='header-item'>Contacts</NavLink>
        </header>
    );
};

export default NavBar;
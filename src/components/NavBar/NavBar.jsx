import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className='header column'>
            <Link to={`/`} className='header-item'>Home</Link>
            <Link to={`/works`} className='header-item'>Works</Link>
            <Link to={`/skills`} className='header-item'>Skills</Link>
            <Link to={`/job`} className='header-item'>Job</Link>
            <Link to={`/contacts`} className='header-item'>Contacts</Link>
        </header>
    );
};

export default NavBar;
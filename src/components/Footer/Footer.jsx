import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer row'>
            <Link to={`/`} className='header-item'>Home</Link>
            <Link to={`/works`} className='header-item'>Works</Link>
            <Link to={`/skills`} className='header-item'>Skills</Link>
            <Link to={`/job`} className='header-item'>Job</Link>
            <Link to={`/contacts`} className='header-item'>Contacts</Link>
        </div>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import './ContactsItem.css';

const ContactsItem = ( props ) => {
    return (
        <div className='contact row'>
            <img src={props.src} alt='' className='contact-img' />
            <Link to={props.link} target='_blank' className='contact-title'>{props.title}</Link>
        </div>
    );
};

export default ContactsItem;
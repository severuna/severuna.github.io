import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem/ContactsItem';
import './Contacts.css';

const Contacts = () => {

    const CONTACTS_LIST = useSelector((state) => state.lang.contacts); 

    let contacts = [];

    CONTACTS_LIST.list.forEach((element) => {
        contacts.push(<ContactsItem key={element.id + Math.random()} {...element} />)
    })
    
    return (
        <div className={`${style.page} column`}>
            <Title variant={CONTACTS_LIST.title}/>
            <div className='contacts column'>
                {contacts}
            </div>
        </div>
    );
};

export default Contacts;
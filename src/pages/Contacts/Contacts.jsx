import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';
import { useSelector } from 'react-redux';

const Contacts = () => {

    const title = useSelector((state) => state.lang.contacts.title); 
    
    return (
        <div className={`${style.page} column`}>
            <Title variant={title}/>
        </div>
    );
};

export default Contacts;
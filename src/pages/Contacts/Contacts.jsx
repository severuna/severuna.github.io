import React from 'react';
import style from '../module/Page.module.css';
import Title from '../module/Title/Title';


const Contacts = () => {
    return (
        <div className={`${style.content} column`}>
            <Title variant={'Contacts'}/>
        </div>
    );
};

export default Contacts;
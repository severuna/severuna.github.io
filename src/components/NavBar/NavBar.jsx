import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEnglish, setUkrainian } from '../../store/actions/lang.action';

const NavBar = () => {

    const lang = useSelector((state) => state.lang);

    const dispatch = useDispatch();

    const selectUA = (e) => {

        e.preventDefault();

        dispatch(setUkrainian('ua'));

    }

    const selectENG = (e) => {

        e.preventDefault();

        dispatch(setEnglish('eng'));
        
    }

    
    return (
        <header className='header column'>
            <div className='lang row'>
                <button className='lang-btn' onClick={(e) => selectENG(e)}>EN</button>
                <button className='lang-btn' onClick={(e) => selectUA(e)}>UA</button>
            </div>
            <NavLink to={`/`} className='header-item' activeClassName="active">{lang.nav[0]}</NavLink>
            <NavLink to={`/works`} className='header-item'>{lang.nav[1]}</NavLink>
            <NavLink to={`/skills`} className='header-item'>{lang.nav[2]}</NavLink>
            <NavLink to={`/experience`} className='header-item'>{lang.nav[3]}</NavLink>
            <NavLink to={`/contacts`} className='header-item'>{lang.nav[4]}</NavLink>
        </header>
    );
};

export default NavBar;
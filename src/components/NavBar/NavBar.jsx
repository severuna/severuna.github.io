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
            <NavLink to={`/`} className='header-item row' activeClassName="active">
                <img src={lang.home.src} alt='' className='header-item__img' />
                {lang.nav[0]}
            </NavLink>
            <NavLink to={`/works`} className='header-item row'>
                <img src={lang.works.src} alt='' className='header-item__img' />
                {lang.nav[1]}
            </NavLink>
            <NavLink to={`/skills`} className='header-item row'>
                <img src={lang.skills.src} alt='' className='header-item__img' />
                {lang.nav[2]}
            </NavLink>
            <NavLink to={`/experience`} className='header-item row'>
                <img src={lang.experience.src} alt='' className='header-item__img' />
                {lang.nav[3]}
            </NavLink>
            <NavLink to={`/contacts`} className='header-item row'>
                <img src={lang.contacts.src} alt='' className='header-item__img' />
                {lang.nav[4]}
            </NavLink>
        </header>
    );
};

export default NavBar;
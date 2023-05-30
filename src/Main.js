import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Works from './pages/Works/Works';
import Contacts from './pages/Contacts/Contacts';

const Main = () => {

    return (
        <div className='main row'>
            <NavBar />
            <Routes>
                <Route path='/works' element={<Works />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route index element={<Home />} />
            </Routes>
        </div>
    );
};

export default Main;
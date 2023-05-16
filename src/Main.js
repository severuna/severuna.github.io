import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Job from './pages/Job/Job';
import Works from './pages/Works/Works';
import Contacts from './pages/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const Main = () => {
    return (
        <div className='main column'>
            <NavBar />
            <Routes>
                <Route path='/works' element={<Works />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/job' element={<Job />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route index element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Main;
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='min-h-[1000px]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
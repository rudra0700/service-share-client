import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
             <div className='mt-24'>

            <Footer></Footer>
             </div>
        </div>
    );
};

export default MainLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navber from '../Pages/Shared/Navber';

const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;
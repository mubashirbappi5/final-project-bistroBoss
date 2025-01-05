import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navber from '../Pages/Shared/Navber';

const Root = () => {
    const location = useLocation()
    const noNavber = location.pathname.includes('register') || location.pathname.includes('login')
    return (
        <div>
            {noNavber ||<Navber/>}
            <Outlet/>
            { noNavber ||<Footer/>}
            
        </div>
    );
};

export default Root;
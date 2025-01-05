import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Navber = () => {
  const {signoutUser,user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const routetitle = {
    "/":'Bistro Boss | Home',
    "/menu":'Bistro Boss | Menu',
    "/order":'Bistro Boss | Order' 
  }
  const title = routetitle[location.pathname] || 'Bistro Boss'
    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
    
    <li><NavLink to={'/order'}>Order Now</NavLink></li>
    <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    
    
    </>
    const handlelogout = ()=>{
      signoutUser()
    }
    return (
        <div className='mx-auto'>
          <Helmet>
            <title>{title}</title>
          </Helmet>
            <div className="navbar fixed  z-50 bg-black bg-opacity-30 md:text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">{user?.email}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/register'} className="btn bg-[#D1A054] border-none">Register</Link>
    <button onClick={handlelogout}>log out</button>
  </div>
</div>
            
        </div>
    );
};

export default Navber;
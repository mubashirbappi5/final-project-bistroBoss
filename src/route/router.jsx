import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Homepage/Home';
import OurMenu from '../Pages/OurMenu/Menu/OurMenu';
import Order from '../Pages/OrderPage/Order/Order';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Contact from '../Pages/Contact/ContactPage/Contact';
import Desboard from '../Pages/Desboard/Desboard';
import Mycarts from '../Pages/Desboard/Mycart/Mycarts';
import AllUsers from '../Pages/Desboard/All users/AllUsers';
import PrivateRoute from './PrivateRoute';
import Adminroute from './Adminroute';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        index:true,
        element:<Home/>
      },
    {
      path:'/menu',
      element:<OurMenu/>

    },
    {
      path:'/order',
      element:<Order/>

    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/contact',
      element:<Contact/>
    }
  ]
    },
    {
      path:'desboard',
      element:<PrivateRoute><Desboard/></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<PrivateRoute><Mycarts/></PrivateRoute>,

        },
        {
          path:'alluser',
          element:<Adminroute><AllUsers/></Adminroute>

        }
      ]
    }
  ]);
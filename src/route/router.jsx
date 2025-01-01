import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Homepage/Home';
import OurMenu from '../Pages/OurMenu/Menu/OurMenu';
import Order from '../Pages/OrderPage/Order/Order';

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

    }]
    },
  ]);
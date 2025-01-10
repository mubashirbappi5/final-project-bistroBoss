import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const Adminroute = ({ children}) => {
    const {user,loading}=useAuth()
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
    return <h1>loading....</h1>
 }
   
    if(user && isAdmin){
        return children
    }
   
      return <div>
               <Navigate to="/" state={{from: location}} replace></Navigate>
      </div> 

};

export default Adminroute;
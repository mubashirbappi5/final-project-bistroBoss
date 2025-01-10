import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
 if(loading){
    return <h1>loading....</h1>
 }
 
    if(user){
        return children
    }
   
      return <div>
               <Navigate to="/login" state={{from: location}} replace></Navigate>
      </div> 


  
};

export default PrivateRoute;
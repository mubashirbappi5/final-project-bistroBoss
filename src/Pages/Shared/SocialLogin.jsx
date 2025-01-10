import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiospublic from '../../Hooks/useAxiospublic';


 
const SocialLogin = () => {
   const axisopub = useAxiospublic()
    const navigate = useNavigate()
    const location = useLocation()
  const from = location.state?.from?.pathname || '/'
    const {googlelogin,fblogin,gitlogin} = useAuth();
    const handlegoogle = ()=>{
        googlelogin()
        .then(res=>{
            console.log(res.user)
            const userinfo={
                name:res.user.displayName,
                email:res.user.email
            }
            axisopub.post('/users',userinfo)
            .then(res=>{
                console.log(res.data)
            })
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handlefacebook = ()=>{
        fblogin()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    const handlegit = ()=>{
        gitlogin()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h4 className='text-center font-medium text-[#444444]'>Or sign up with</h4>
            <div className='flex my-6 justify-center gap-4'>
                <button onClick={handlefacebook} className='btn btn-outline btn-circle'><FaFacebook /></button>
                <button onClick={handlegoogle} className='btn btn-outline btn-circle'><FaGoogle /></button>
                <button onClick={handlegit} className='btn btn-outline btn-circle'><FaGithub /></button>
            </div>
            
        </div>
    );
};

export default SocialLogin;
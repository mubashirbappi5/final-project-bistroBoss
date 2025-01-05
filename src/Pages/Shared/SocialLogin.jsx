import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';


 
const SocialLogin = () => {
    const navigate = useNavigate()
    const {googlelogin,fblogin,gitlogin} = useAuth();
    const handlegoogle = ()=>{
        googlelogin()
        .then(res=>{
            console.log(res.user)
            navigate('/')
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
import React, { useEffect, useState } from 'react';
import SocialLogin from './Shared/SocialLogin';
import registerbg from '../assets/others/authentication.png';
import loginimg from '../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../Hooks/UseAuth';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signinUser} = useAuth()
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
  const handlecapta = (e)=>{
    const uservalid = e.target.value
    if (validateCaptcha(uservalid)==true) {
     
      setDisabled(false)
  }

  else {
      setDisabled(true)
  }
  }
  const handlelogin =(e)=>{
    e.preventDefault()
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password)
    signinUser(email,password)
    .then(res=>{
      console.log(res.user)
      e.target.reset()
  })
  .catch(error=>{
      console.log(error)
  })
  }
    return (
        <div>
             <div style={{backgroundImage:`url(${registerbg})`}} className='min-h-screen'>
              <Link to={'/'}>Back to Home</Link>
            <div className='flex justify-around md:flex-row-reverse flex-col-reverse items-center '>
             <div className='w-full mb-10 lg:w-1/3'>
             <h1 className='text-3xl font-bold text-center'>Sign In</h1>
             <div className="card bg-transparent w-full shrink-0 ">
      <form onSubmit={handlelogin} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handlecapta} placeholder="captacha" name='captacha' className="input input-bordered" required />
          
        </div>
      
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary bg-[#fedaa8] border-none text-black">Login</button>
        </div>
        <h5 className='text-center text-sm text-[#D1A054]'>New here?  <Link className='underline' to={'/register'}> Create a New Account</Link></h5>
        
      </form>
      <SocialLogin/>
    </div>

             </div>

              <div>
                <img src={loginimg} alt="" />
              </div>
            </div>
            
        </div>
            
        </div>
    );
};

export default Login;
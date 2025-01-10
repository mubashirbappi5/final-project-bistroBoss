import React from 'react';
import registerbg from '../assets/others/authentication.png';
import  registerimg from '../assets/others/authentication1-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './Shared/SocialLogin';
import { useForm,  } from "react-hook-form"
import useAuth from '../Hooks/useAuth';
import useAxiospublic from '../Hooks/useAxiospublic';
const Register = () => {
  const {signupUser,updateuser} = useAuth();
  const axiospub = useAxiospublic();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
   
    formState: { errors },
  } = useForm()

  const onSubmit = data =>{
    console.log(data)
    signupUser(data.email,data.password)
    .then(res=>{
      console.log(res.user)
      const profile = {
        displayName:data.name,
        photoURL:data.url,

      }
      updateuser(profile)
      .then(res=>{
        console.log(res.user)
      })

      const userinfo = {
        name:data.name,
        email:data.email,

        
      }
      axiospub.post('/users',userinfo)
      .then(res=>{
        console.log(res.data)
      })
      reset();
      navigate('/')


      
  })
  .catch(error=>{
      console.log(error)
  })
  }
    return (
        <div style={{backgroundImage:`url(${registerbg})`}} className='min-h-screen p-10'>
           <Link to={'/'}>Back to Home</Link>
            <div className='flex justify-around md:flex-row flex-col-reverse items-center '>
             <div className='w-full mb-10 lg:w-1/3'>
             <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
             <div className="card bg-transparent w-full shrink-0 ">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter Name" name='name' {...register("name",{required:true})} className="input input-bordered" required />
          {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="Enter photo url" name='url' {...register("url",{required:true})} className="input input-bordered" required />
          {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' {...register("email",{ required: true })} className="input input-bordered" />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' {...register("password",{ pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/
 })} className="input input-bordered" required />
           {errors.password && <span className='text-sm text-red-500'>password must be 8 chr ,one uppercase and one loarcase and one number</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-[#fedaa8] border-none text-black">Register</button>
        </div>
        <h5 className='text-center text-sm text-[#D1A054]'>Already registered? Go to <Link className='underline' to={'/login'}> log in</Link></h5>
        
      </form>
      <SocialLogin/>
    </div>

             </div>

              <div>
                <img src={registerimg} alt="" />
              </div>
            </div>
            
        </div>
    );
};

export default Register;
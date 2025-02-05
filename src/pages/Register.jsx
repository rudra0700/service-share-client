import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import googleLogo from '../assets/google login logo.png'
import registerLottie from '../assets/lottifiles/register.json'
import Lottie from 'lottie-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {Helmet} from "react-helmet";


const Register = () => {
    const { createUser, updateProfileUser, setUser, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value

    
        try {
            const result = await createUser(email, password);
            await updateProfileUser(name, photo)
            setUser({...result.user, displayName: name, photURL: photo})
            toast.success("Signup Successfull")
            navigate('/')
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
          navigate('/')
        })
    }
    
    return (
    <div className="hero min-h-screen">
                                <Helmet>
                                    <title>SwiftServe | Register</title>
                                </Helmet>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left hidden md:block w-[500px]">
          <Lottie animationData={registerLottie}></Lottie>
      </div>
      <div className="card bg-base-100 w-full lg:max-w-sm shrink-0 shadow-2xl">
              <img src='/public/service reg log icon.png' className='w-10 mx-auto mt-10' alt="" />
            <h4 className='text-center mt-8 mb-4 text-xl text-gray-600'>Get Your Free Account Now</h4>
            <div onClick={handleGoogleLogin} className='flex items-center gap-8 md:gap-24 lg:gap-14  border border-gray-200 p-1 rounded-md mr-8 ml-8'>
                <img src={googleLogo} className='w-10' alt="google logo" />
                <p className='font-medium text-gray-600'>Sign in with Google</p>
           </div>
           <div className="divider text-xs w-80 mx-auto mb-0">OR REGISTRATION WITH EMAIL</div>

        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-600">Username</span>
            </label>
            <input type="text" name='name' className="input input-bordered focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-600">Photo URL</span>
            </label>
            <input type="url" name='photo' className="input input-bordered focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" required />
          </div>
           <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-600">Email Address</span>
            </label>
            <input type="email" name='email' className="input input-bordered focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" required />
          </div> 
           <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-600">Password</span>
            </label>
            <input type="password" name='password' className="input input-bordered focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral text-white">Sign Up</button>
          </div>
        </form>

        <div className="divider text-xs w-80 mx-auto mt-0"><Link to={'/login'}>OR SIGN IN</Link></div>
      </div>
    </div>
  </div>
    );
};

export default Register;
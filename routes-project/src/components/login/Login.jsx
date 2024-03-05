import React from 'react';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <div className='w-full h-screen flex itmes-center justify-center bg'>
        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
      <h1>Login</h1>
      <form action="login"> 
        <div>
          <input type="email"className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-non focus:ring-0 foucs:text-white focus:border-blue-600 peer' />
          <label htmlFor='email' className='absolute text-sm text-white duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-show:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>Your Email</label>
        </div>
        <div>
          <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-non focus:ring-0 foucs:text-white focus:border-blue-600 peer' />
          <label htmlFor='password'  className='absolute text-sm text-white duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-show:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>Your Password</label>
        </div>
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor='remember'>Remember Me</label>
        </div>
        <span>Forgot Password?</span>
        <button type="submit">Login</button>
        <div>
        <span>New Here? <Link to='/register'>Create an Account</Link></span>
      </div>
      </form>
     </div>
    </div>
  );
}

export default Login;

import React from 'react';
import {Link} from 'react-router-dom'

 export default function Login() {
  return (
    <div className='bg'>
      <div className="wrapper">
        <span className="icon-close"><ion-icon name="close"></ion-icon></span>
        <div className="form-box login">
          <h1> Login</h1>
          <form action="login" method="post">
            <div className="input-box">
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="email" required="required" name="em"/>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" required="required" name="pwd"/>
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox"/>Remember me</label>
              <Link to="#">Forgot password?</Link>
            </div>
            <button type="submit" className="btns">Login</button>
            <div className="login-register">
              <p>Don't have an account?<Link to="/Register" className="register-link">Register</Link></p>
            </div>
          </form>
        </div>
       </div>
       </div>
  );
}




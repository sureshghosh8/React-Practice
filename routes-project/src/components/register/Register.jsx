import React from 'react'
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className='bg'>
      <div className="wrapper">
    <div className="form-box register">
          <h1>Registration</h1>
          <form action="register" method="post">
            <div className="input-box">
              <span className="icon"><ion-icon name="person"></ion-icon></span>
              <input type="text" required="required" name="na"/>
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="email" required="required" name="em"/>
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" required="required" name="pwd" value="" id="lock"/>
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox"/>Show password</label>
            </div>
            <button type="submit" className="btns" value="register">Register</button>
            <div className="login-register">
              <p>Already have an account?<Link to="#" className="login-link">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register
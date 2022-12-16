import React from 'react'
import './Auth.css';
import {Link} from 'react-router-dom'
const Login =()=> {
  return (
    <div className='form_container'>
    <h1>Login</h1>
    <form >
    <label>Email:</label>
    <input type='text' placeholder="EMAIL"/>
    <label>Password:</label>
    <input type='text' placeholder="PASSWORD"/>
    <button className='btn btn-badge bg-primary text-white px-4'>Log in</button>
    <Link to='/resetpassword'><p className='text-primary px-4'>Forgot password?</p></Link> 
    <p>Need an account? <Link to='/register'><span>Register</span></Link></p>



    
    
    </form>
    
    </div>
  )
}

export default Login
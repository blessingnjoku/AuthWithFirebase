import React from 'react'
import './Auth.css';
import {Link} from 'react-router-dom'
const Login =()=> {
  return (
    <div className='form_container'>
    <h1>Reset Password</h1>
    <form >
    <label>Email:</label>
    <input type='text' placeholder="EMAIL"/>
    
   <Link><button className='btn btn-badge bg-primary text-white px-4'>Reset Password</button></Link> 
   <Link to='/login'><p className='text-primary px-4'>Log in</p></Link> 

    
    </form>
    
    </div>
  )
}

export default Login
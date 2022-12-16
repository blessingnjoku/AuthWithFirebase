import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

const Register =()=> {
  return (
    <div className='form_container'>
    <h1>Register</h1>
    <form >
    <label>Email:</label>
    <input type='text' placeholder="EMAIL" required/>
    <label>Password:</label>
    <input type='text' placeholder="PASSWORD" required/>
    <Link><button className='btn btn-badge bg-primary text-white px-4'>Register</button></Link>
    <p >Already have an account?<Link to='/login'><span className='text-primary'>Log in</span></Link> </p>

    
    </form>
    
    </div>
  )
}

export default Register
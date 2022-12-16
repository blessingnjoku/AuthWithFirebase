import React from 'react'
import {Link} from 'react-router-dom'

const Navbar =()=> {
  return (
    <div className='w-100 bg-primary p-2 d-flex justify-content-between'>
    <h5 className='logo text-white'>Navbar</h5>
    <div className='btn_box' >
    <Link to='/login'><button className='btn btn bg-white px-4 mx-4'>Login</button></Link> 
    <Link to='/register'><button className='btn btn bg-white px-4'>Register</button></Link></div>
    

    
    </div>
  )
}

export default Navbar
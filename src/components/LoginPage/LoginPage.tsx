import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

function LoginPage() {
  return (
    <div className="login">
      <div className="from">
            <h1>Login</h1>
            <input type="text" className='one' placeholder='username' />
            <input type="password" name="" id="" className='two' placeholder='password'/>
            <button>Login</button>
            <div className="hr"></div>
            <p>have no Account?</p>
            <NavLink to='/register' className='regis'>Register</NavLink>
      </div>
    </div>
  )
}

export default LoginPage
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './login.scss'
function LoginPage() {
  const navigate = useNavigate();
  const ToMainPAge = ()=>{
    navigate("/iot")
  }
  return (
    <div className="login">
      <div className="from">
        <img src={require('./img/logo.png')} alt="" />
            <h1>DosE-IOT Login</h1>
            <input type="text" className='one' placeholder='username' />
            <input type="password" name="" id="" className='two' placeholder='password'/>
            <button type='submit' onClick={ToMainPAge}>Login</button>
            <div className="hr"></div>
            <p>have no Account?</p>
            <NavLink to='/register' className='regis'>Register</NavLink>
      </div>
    </div>
  )
}

export default LoginPage
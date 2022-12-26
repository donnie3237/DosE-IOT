import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import './regis.scss'

function RegisTer() {
  const Navigate = useNavigate();
  const ToLoginPAge = () =>{
    Navigate("/")
  }
  return (
    <div className='regispage'>
        <div className="regisfrom">
            <h1>Register</h1>
            <input type="text" placeholder='YourName' />
            <input type="text" placeholder='UserName' />
            <input type="password" name="" id="" placeholder='password'/>
            <input type="password" name="" id="" placeholder='confirm password'/>
            <div className="cbx">
              <input type="checkbox" name="" id="" />
              <p>Agree with terms of service <a href="">Terms</a></p>
            </div>
            <NavLink to='/' className='regis-btn'>Register</NavLink>
            <hr />
            <p>Aready have an account <a onClick={ToLoginPAge}>Login</a></p> 
        </div>
    </div>
  )
}

export default RegisTer
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './login.scss';

function LoginPage() {
  const [username ,setUsername] = useState<string>("");
  const [password , setPassword] = useState<string>("");
  const navigate = useNavigate();
  const ToMainPAge = ()=>{
    if(username == "" || password == ""){
      toast.warn("กรุณากรอกข้อมูลให้ครบถ้วน")
    }else{
      navigate("/iot")
    }
  }
  return (
    <div className="login">
      <div className="from">
        <img src={require('./img/logo.png')} alt="" />
            <h1>DosE-IOT Login</h1>
            <input type="text" 
              className='one' 
              placeholder='username'
              onChange={(e)=>{
                setUsername(e.target.value)
              }} />
            <input type="password" 
              name="" id="" 
              className='two' 
              placeholder='password'
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
            <button type='submit' onClick={ToMainPAge}>Login</button>
            <div className="hr"></div>
            <p>have no Account?</p>
            <NavLink to='/register' className='regis'>Register</NavLink>
      </div>
    </div>
  )
}

export default LoginPage
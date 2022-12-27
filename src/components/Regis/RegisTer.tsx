import React, { useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './regis.scss'
import axios from 'axios';
import { APiURL } from '../../api.js';

function RegisTer() {
  const [name ,setName] = useState<string>("");
  const [username ,setUsername] = useState<string>("")
  const [password , setPassword] = useState<string>("");
  const [password2 ,setPassword2] = useState<string>("");
  const [check , setCheck] = useState<boolean>(false)
  const Navigate = useNavigate();
  const ToLoginPAge = () =>{
    Navigate("/")
  }
  const Register = ()=>{
    if(username == "" || password == "" || name == ""){
      toast.warn("กรุณากรอกข้อมูลให้ครบถ้วน!!")
    }else if(password != password2){
      toast.warn("รหัสผ่านไม่ตรงกัน")
    }else if(!check){
      toast.warn("please agree terms of servie")
    }
    else{
      axios.post(`${APiURL}register`, 
        {
          name:name,
          username:username,
          password:password
        }
      ).then((response)=>{
        if(response.data == 'รหัสซ้ำ'){
          toast.warn(`${username} มีผุ้ใช้อยู่แล้ว`)
        }else{
          toast.success(`${name} has been created!!`);
          Navigate('/')
        }
      })
    }
  }
  return (
    <div className='regispage'>
        <div className="regisfrom">
            <h1>Register</h1>
            <input 
              type="text" 
              placeholder='YourName'
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
            <input 
              type="text" 
              placeholder='UserName' 
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
            />
            <input type="password" name="" id="" placeholder='password'
            onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <input type="password" placeholder='confirm password'
            onChange={(e)=>{
              setPassword2(e.target.value)
            }}/>
            <div className="cbx">
              <input type="checkbox" onClick={(e)=>{
                setCheck((prev)=> !prev)
              }}  />
              <p>Agree with terms of service <NavLink to="/register/terms">Terms</NavLink></p>
            </div>
            <a onClick={Register} className='regis-btn'>Register</a>
            <hr />
            <p>Aready have an account <a onClick={ToLoginPAge}>Login</a></p> 
        </div>
    </div>
  )
}

export default RegisTer
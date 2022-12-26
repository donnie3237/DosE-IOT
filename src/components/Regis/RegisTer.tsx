import React, { useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './regis.scss'

function RegisTer() {
  const [name ,setName] = useState<string>("");
  const [username ,setUsername] = useState<string>("")
  const [password , setPassword] = useState<string>("");
  const [password2 ,setPassword2] = useState<string>("")
  console.log(name+username+password)
  const Navigate = useNavigate();
  const ToLoginPAge = () =>{
    Navigate("/")
  }
  const Register = ()=>{
    if(username == "" || password == "" || name == ""){
      toast.warn("กรุณากรอกข้อมูลให้ครบถ้วน!!")
    }else if(password != password2){
      toast.warn("รหัสผ่านไม่ตรงกัน")
    }else{
      Navigate("/iot")
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
            <input type="password" name="" id="" placeholder='confirm password'
            onChange={(e)=>{
              setPassword2(e.target.value)
            }}/>
            <div className="cbx">
              <input type="checkbox" name="" id="" />
              <p>Agree with terms of service <a href="">Terms</a></p>
            </div>
            <a onClick={Register} className='regis-btn'>Register</a>
            <hr />
            <p>Aready have an account <a onClick={ToLoginPAge}>Login</a></p> 
        </div>
    </div>
  )
}

export default RegisTer
import React from 'react'
import './login.css'

function LoginPage() {
  return (
    <div className="login">
      <div className="from">
        <div className="absolu">
          <img src="./logo.png" alt="" />
          <p>welcome</p>
        </div>
            <h1>Login</h1>
            <input type="text" className='one' placeholder='username' />
            <input type="password" name="" id="" className='two' placeholder='password'/>
            <button>Login</button>
            <hr />
      </div>
    </div>
  )
}

export default LoginPage
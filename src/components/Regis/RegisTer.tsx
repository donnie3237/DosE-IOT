import React from 'react'
import './regis.css'

function RegisTer() {
  return (
    <div className='regispage'>
        <div className="regisfrom">
            <h1>Register</h1>
            <input type="text" placeholder='YourName' />
            <input type="text" placeholder='UserName' />
            <input type="password" name="" id="" placeholder='password'/>
            <input type="password" name="" id="" placeholder='confirm password'/>
            <div className="cbx">
                <input type="checkbox" name="" id="cbx" className='eicbx' />
                <label htmlFor="">agree with terms of service</label>
            </div>
        </div>
    </div>
  )
}

export default RegisTer
import React, { useState } from 'react'
import './MainPAge.scss'

type Props = {}

const MainPAge = (props: Props) => {
  const [username , setUsername] = useState<string>("")
  console.log(username)
  return (
    <div className="mainPage">
        <div className="profile">
            <img src={require('./img/logo.png')} alt="" />
        </div>
        <div className="user">
          <p>hello {username}</p>
        </div>
        <div className="device">
            <div className="dev dev1">
                <img src="" alt="" />
                <div className="title">
                    
                </div>
            </div>
            <div className="dev dev2"></div>
        </div>
    </div>
  )
}

export default MainPAge
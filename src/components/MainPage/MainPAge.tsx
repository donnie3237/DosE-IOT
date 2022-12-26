import React from 'react'
import './MainPAge.scss'

type Props = {}

const MainPAge = (props: Props) => {
  return (
    <div className="mainPage">
        <div className="profile">
            <img src={require('./img/logo.png')} alt="" />
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
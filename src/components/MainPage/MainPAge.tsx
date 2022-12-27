import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MainPAge.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { APiURL } from '../../api';
type Props = {}
const MainPAge = (props: Props) => {
  const ThisID = useParams().id;
  const [user ,setUser]= useState({})
    axios.get(`${APiURL}get/${ThisID}`).then((response)=>{
       setUser(response.data[0])
    })
  return (
    <div className="mainPage">
        <div className="profile">
            <img src={require('./img/logo.png')} alt="" />
        </div>
        <div className="user">
          <p>Hello  :  {user.name}</p>
        </div>
        <div className="device">
            <div className="dev dev1">
                <img src="" alt="" />
                <div className="title">
                    
                </div>
            </div>
            <div className="dev dev2"></div>
            <div className="add"><a href="">+</a></div>
        </div>
    </div>
  )
}

export default MainPAge
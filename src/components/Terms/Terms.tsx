import React from 'react'
import { NavLink } from 'react-router-dom'
import './terms.scss'
type Props = {}

function Terms({}: Props) {
  return (
    <div className='termss'>
        <h1>Terms of Service!!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dolore distinctio autem. Quaerat porro culpa dicta inventore corporis ratione quidem atque molestiae! Accusamus recusandae dolor maiores consequatur, cupiditate deleniti minima.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus minus labore ipsam? Laudantium, commodi magni! Dolor quod, voluptate reprehenderit deserunt debitis corporis iste ad omnis quasi quis et. Amet quaerat vero repellendus alias nesciunt! Ex consequatur voluptatibus nesciunt aliquid debitis!
        </p>
        <NavLink to="/register" className='terms-btn'>
            back
        </NavLink>
    </div>
  )
}

export default Terms
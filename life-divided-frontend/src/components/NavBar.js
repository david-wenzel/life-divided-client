import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul id='nav'>
        <p><NavLink to="/sections">Home</NavLink></p>
        {/* <li><NavLink to="/about">About</NavLink></li> */}
      </ul>
    </div>
  )
}

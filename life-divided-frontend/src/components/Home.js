import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>LIFE/divided</h1>
      <NavLink to={'/sections'}>Enter</NavLink>
    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-gray-200 text-gray-700 flex gap-10 justify-center p-2'>
      <NavLink className={(e) => e.isActive ?  `text-red-500 font-semibold ease-in duration-100 `:""} to='/'>Home</NavLink>
      <NavLink className={(e) => e.isActive ?  `text-red-500 font-semibold`:""} to='/user'>User</NavLink>
      <NavLink className={(e) => e.isActive ?  `text-red-500 font-semibold`:""} to='/about'>About</NavLink>
    </div>
  )
}

export default Nav

import React from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form is Submited');
    navigate('/')
  }
  return (
    <div>
      <h1>Hello World, This is the user</h1>
      <form onSubmit={submitHandler}>
        <button type='submit' className='bg-indigo-500 rounded-md p-2 ml-7 text-gray-100'>Submit Form</button>
      </form>
      <ul className='list-disc'>
        <li className='list-item'> <NavLink className='list-item' to={`${pathname}/1`} >Iteam1</NavLink></li>
        <li className='list-item'> <NavLink className='list-item' to={`${pathname}/2`} >Iteam1</NavLink></li>
        <li className='list-item'> <NavLink className='list-item' to={`${pathname}/3`} >Iteam1</NavLink></li>
      </ul >
      <hr />
      <Outlet />
    </div>
  )
}

export default User

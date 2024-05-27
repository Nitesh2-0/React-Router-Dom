import React, { useState } from 'react'
import axios from '../helper/axios'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [user,setUser] = useState(null)

  const getUser = async () => {
    try {
      const {data} =  await axios.get('/users')
      setUser(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } 

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log('Form is Submited');
  //   navigate('/')
  // }
  return (
    <div>
      <h1>Hello World, This is the user</h1>
      {/* <form onSubmit={submitHandler}> type='submit' */}
        <button onClick={getUser} className='bg-indigo-500 rounded-md p-2 ml-7 text-gray-100'>Get User</button>
      {/* </form> */}
      <ul className='list-disc'>
        {user ? user.map((u) => {
          <li className='list-item' key={u.id}>{u.name}</li>
        }):'Loading.....'}
        {/* <li className='list-item'> <NavLink className='list-item' to={`${pathname}/1`} >Iteam1</NavLink></li>
        <li className='list-item'> <NavLink className='list-item' to={`${pathname}/2`} >Iteam1</NavLink></li>
        <li className='list-item'> <NavLink className='list-item' to={`${pathname}/3`} >Iteam1</NavLink></li> */}
      </ul >
      {/* <hr /> */}
      {/* <Outlet /> */}
    </div>
  )
}

export default User

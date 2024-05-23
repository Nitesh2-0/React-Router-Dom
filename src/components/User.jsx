import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const submitHandler = (e) =>{
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
    </div>
  )
}

export default User

import axios from 'axios';
import React from 'react'

const About = () => {
  async function aboutMe() {
    try {
      const {data} = await axios.get('/posts')
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='text-2xl'>
      About
      <button onClick={aboutMe}>Get Post</button>
    </div>
  )
}

export default About

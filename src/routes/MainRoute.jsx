import React from 'react'
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import NotFound from '../components/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from '../components/Details'


const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/user' element={<User />} /> */}

        <Route path='/user' element={<User/>}>
          <Route path='/user/:id' element={<Details/>} />
        </Route>

        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default MainRoute

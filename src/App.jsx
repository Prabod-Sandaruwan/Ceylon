import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import { NavLink } from "react-router-dom";
import Footer from './component/footer/Footer';

function App() {

  return (
    <div>
      <Router>
        <div className='navArea'>
          <nav className="navbar">
            <NavLink className='nav-link' to='/'>home</NavLink>
            <NavLink className='nav-link' to='/destinations'>destinations</NavLink>
            <NavLink className='nav-link' to='/about'>about</NavLink>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App

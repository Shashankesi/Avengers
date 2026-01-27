import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ onNavigate, currentPage }) => {
  const [activeLink, setActiveLink] = useState('home')

  const handleClick = (page) => {
    setActiveLink(page)
    onNavigate(page)
  }

  return (
    <nav className="navbar">
      <ul className="nav-group left">
        <li 
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleClick('home')}
        >
          Home
        </li>
        <li 
          className={activeLink === 'characters' ? 'active' : ''}
          onClick={() => handleClick('characters')}
        >
          Characters
        </li>
        <li 
          className={activeLink === 'movies' ? 'active' : ''}
          onClick={() => handleClick('movies')}
        >
          Movies
        </li>
        <li 
          className={activeLink === 'comics' ? 'active' : ''}
          onClick={() => handleClick('comics')}
        >
          Comics
        </li>
      </ul>

      <div className="logo">
        <img src='./images/logo.png' alt="Avengers Logo" onClick={() => handleClick('home')} />
      </div>

      <ul className="nav-group right">
      </ul>
    </nav>
  )
}

export default Navbar

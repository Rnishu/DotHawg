import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useLocation } from 'react-router-dom'

function Navbar({click, setClick}) {
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const location=useLocation()
  return (
    <header>
      <Link to='/' className='logo'>
        DotHawg <i className="fab fa-typo3"></i>
      </Link>
      <div className='hamburger' onClick={handleClick}>
        <i className={click ? 'fas fa-times fa-xl' : 'fas fa-bars fa-xl'} />
      </div>
      <nav className={click ? 'nav-bar active' : 'nav-bar'}>


          <ul>
            <li className='nav-item'>
              <Link to='/' className={location.pathname=="/" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/menu' className={location.pathname=="/menu" ? "nav-links active" : "nav-links"}  onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' className={location.pathname=="/about-us" ? "nav-links active" : "nav-links"}  onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/store-locator' className={location.pathname=="/store-locator" ? "nav-links active" : "nav-links"}   onClick={closeMobileMenu}>
                Store Locator
              </Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar

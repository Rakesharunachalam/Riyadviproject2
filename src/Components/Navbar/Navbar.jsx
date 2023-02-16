import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Chennai Hotels</span>
        </div>
        <div className='navItems'>
            <button className='navButtons'>Register</button>
            <button className='navButtons'>Login</button>
        </div>

    </div>
  )
}

export default Navbar
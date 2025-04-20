import React,{useState} from 'react'
// importing the react icons
// import { GiCrossedSwords } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  // creating state to pass conditional rendering onClick
  const [isopen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isopen)
  }

  return (
    <div>
        <div className="nav-container">
            <div className="logo"><Link to='/'><h1>PlayBox.io</h1></Link></div>
            <ul className={`nav-links ${isopen ? "active" : ""}`}>
              <button className='btn btn-close' onClick={closeDrawer}><FaTimes/></button>
                <li><Link to='/' onClick={closeDrawer}>Home</Link></li>
                <li><Link to='/services' onClick={closeDrawer}>Services</Link></li>
                <li><Link to='/about' onClick={closeDrawer}>About</Link></li>
                <li><Link to='/contact' onClick={closeDrawer}>Contact</Link></li>
              
            </ul>
              <div className='btn btn-menu' onClick={toggleMenu}>{isopen? <FaTimes/> : <FaBars/>}</div>
        </div>
    </div>
  )
}

export default Navbar;
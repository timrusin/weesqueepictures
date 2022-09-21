import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick (!click)
    const closeMenu = () => setClick (false)

  return (
    <div className={click ? "navbar active" : "navbar"}>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-dash menu-dashes-angle1" : "fas fa-dash menu-dashes"}/>
        <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
        <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
      </div>
        <Link to="/">
          <div className="title">weesqueepictures</div>
        </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link className="nav-links" to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
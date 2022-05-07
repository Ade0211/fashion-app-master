import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
export const NavBar = () => {
  return (
    <div>
         <nav className="nav-header">
          <div><img id="nav-image" src="https://blog.spoongraphics.co.uk/wp-content/uploads/2009/03/Picture-12.png" /></div>
          
          <ul className="nav-list">
            <li className="list-item">
              {/* <a href="#home">HOME</a> */}
              <Link to="/">HOME </Link>
            </li>
            <li className="list-item">
              {/* <a href="#about-us">ABOUT US</a> */}

              <Link to="/about-us">ABOUT US </Link>
            </li>
            <li className="list-item">
              {/* <a href="#contact-us">CONTACT US</a> */}
              <Link to="/contact-us">CONTACT US </Link>
            </li>
            <li className="list-item">
              <button className="login-button">
                <a href="#login">Log in</a>
              </button>
            </li>
          </ul>
        </nav>
    </div>
  )
}

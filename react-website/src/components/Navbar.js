import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    // State to handle click on hamburger icon
    const [click, setClick] = useState(false);

    // handler function to handle toggle of hamburger icon
    const handleClick = () => setClick(!click);

    // handler function to handle menu-bar toggle
    const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                DEV <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;

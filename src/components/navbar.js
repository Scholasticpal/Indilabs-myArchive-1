import React, { useState, useEffect } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const closeMobileMenu = () => setShowMediaIcons(false);

  const handleClickOutside = (event) => {
    if (showMediaIcons && !document.querySelector(".main-nav").contains(event.target)) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    // Adding click event listener
    if (showMediaIcons) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMediaIcons]); // Dependency array ensures effect runs only when showMediaIcons changes

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src = "./img/Logo-black.png" alt="Indilabs.ai" className="logo-black"></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="home" smooth={true} onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} onClick={closeMobileMenu}>About</Link>
            </li>
            <li>
              <Link to="our-product" smooth={true} onClick={closeMobileMenu}>Our Product</Link>
            </li>
            <li>
              <Link to="features" smooth={true} onClick={closeMobileMenu}>Features</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} onClick={closeMobileMenu}><button>Contact Us</button></Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)} className="hamburger-icon">
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
    </>
  );
};

export default Navbar;
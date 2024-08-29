import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu.svg";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    // Add click event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMobileMenu(false);
    }
  };

  return (
    <nav
      className={`l-container ${sticky && "dark-nav"}`}
      ref={navRef}
    >
      <img src={logo} alt="" className="logo" />
      <ul className={!mobileMenu && "hide-mobile-icon"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={0} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-150} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menuIcon} alt="" className="menuicon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://t4.ftcdn.net/jpg/01/09/64/21/240_F_109642196_jjSpItOl0x0NV9hjX0Uj5YjOJ7bGzOTY.jpg"
            alt="logo"
            className="d-inline-block align-text-top rounded-circle w-50 h-25 w-lg-50 h-lg-25 w-md-25 h-md-25 w-sm-25 h-sm-25"
            
          />
      
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav mx-auto custom-nav-margin primary display-1">
            <li className="nav-item mx-5">
              <Link className="nav-link text-light " to="/">Home</Link>
            </li>
            <li className="nav-item mx-5 ">
              <Link className="nav-link text-light " to="/Contact">Contact</Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link text-light " to="/Work">Work</Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link text-light" to="/skills">Skills</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
import React, { useState } from "react";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* Brand Logo and Name */}
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
    {/*
            <img
              src="https://t4.ftcdn.net/jpg/01/09/64/21/240_F_109642196_jjSpItOl0x0NV9hjX0Uj5YjOJ7bGzOTY.jpg"
              alt="Manish Kumar Logo"
              className="d-inline-block rounded-circle"
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'cover'
              }}
            />
              */}
            <span className="ms-2 fw-bold d-none d-sm-inline">Manish Kumar</span>
          </Link>

          {/* Mobile Toggle Button */}
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

          {/* Navigation Menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light fw-bold ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                  onClick={closeMenu}
                >
                  <i className="fas fa-home me-1"></i>
                  Home
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light fw-bold ${
                    location.pathname === "/Work" ? "active" : ""
                  }`}
                  to="/Work"
                  onClick={closeMenu}
                >
                  <i className="fas fa-briefcase me-1"></i>
                  Work
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light fw-bold ${
                    location.pathname === "/skills" ? "active" : ""
                  }`}
                  to="/skills"
                  onClick={closeMenu}
                >
                  <i className="fas fa-cogs me-1"></i>
                  Skills
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light fw-bold ${
                    location.pathname === "/Contact" ? "active" : ""
                  }`}
                  to="/Contact"
                  onClick={closeMenu}
                >
                  <i className="fas fa-envelope me-1"></i>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <div className="navbar-nav ms-auto">
              <Link
                to="/Contact"
                className="btn btn-light btn-sm fw-bold"
                onClick={closeMenu}
              >
                <i className="fas fa-paper-plane me-1"></i>
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="mobile-overlay d-lg-none"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

export default Header;

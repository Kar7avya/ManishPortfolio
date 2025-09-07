// import React, { useState } from "react";
// import "../styles/Header.css";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle menu visibility
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark ">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img
//             src="https://t4.ftcdn.net/jpg/01/09/64/21/240_F_109642196_jjSpItOl0x0NV9hjX0Uj5YjOJ7bGzOTY.jpg"
//             alt="logo"
//             className="d-inline-block align-text-top rounded-circle w-lg-50 h-lg-50  w-md-25 h-md-25 w-sm-25 h-sm-25"
            
//           />
      
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={toggleMenu}
//           aria-controls="navbarNav"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
//         <ul className="navbar-nav mx-auto custom-nav-margin primary display-1">
//             <li className="nav-item mx-5">
//               <Link className="nav-link text-light fw-bolder " to="/">Home</Link>
//             </li>
            
//             <li className="nav-item mx-5">
//               <Link className="nav-link text-light  fw-bolder" to="/Work">Work</Link>
//             </li>
//             <li className="nav-item mx-5">
//               <Link className="nav-link text-light fw-bolder " to="/skills">Skills</Link>
//             </li>

//             <li className="nav-item mx-5 ">
//               <Link className="nav-link text-light fw-bolder " to="/Contact">Contact</Link>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;
import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside or on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with professional structure
  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: "fas fa-home",
      description: "Overview & Introduction"
    },
    {
      path: "/Work",
      name: "Experience",
      icon: "fas fa-briefcase",
      description: "Professional Journey"
    },
    {
      path: "/skills",
      name: "Expertise",
      icon: "fas fa-cogs",
      description: "Technical Skills"
    },
    {
      path: "/Contact",
      name: "Contact",
      icon: "fas fa-envelope",
      description: "Get In Touch"
    }
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-professional fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid px-4">
          {/* Brand Section */}
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <div className="brand-container d-flex align-items-center">
              <div className="brand-logo">
                <div className="logo-circle">
                  <i className="fas fa-bolt text-white fs-4"></i>
                </div>
                <div className="logo-ring"></div>
              </div>
              <div className="brand-text d-none d-md-block">
                <div className="brand-name">Manish Kumar</div>
                <div className="brand-title">Electrical Engineering Expert</div>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`navbar-toggler ${isOpen ? 'toggler-open' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="toggler-line line-1"></span>
            <span className="toggler-line line-2"></span>
            <span className="toggler-line line-3"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li key={item.path} className="nav-item mx-2">
                  <Link 
                    className={`nav-link custom-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    to={item.path}
                    onClick={closeMenu}
                  >
                    <div className="nav-link-content">
                      <i className={`${item.icon} nav-icon`}></i>
                      <span className="nav-text">{item.name}</span>
                      <div className="nav-description d-none d-xl-block">{item.description}</div>
                    </div>
                    <div className="nav-link-bg"></div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Professional Actions */}
            <div className="navbar-actions d-none d-lg-flex ms-3">
              <div className="action-buttons">
                <a 
                  href="tel:7747013556" 
                  className="btn btn-outline-light btn-sm me-2 action-btn"
                  title="Call Now"
                >
                  <i className="fas fa-phone me-1"></i>
                  Call
                </a>
                <Link 
                  to="/Contact" 
                  className="btn btn-light btn-sm action-btn"
                  onClick={closeMenu}
                >
                  <i className="fas fa-paper-plane me-1"></i>
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Background Overlay */}
        <div className="nav-bg-overlay"></div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}

      {/* Progress Bar */}
      <div className="scroll-progress">
        <div className="progress-bar"></div>
      </div>
    </>
  );
}

export default Header;
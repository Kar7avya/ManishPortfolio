import React from "react";
import "../styles/Header.css";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="brand-name">
        <img src="https://t4.ftcdn.net/jpg/01/09/64/21/240_F_109642196_jjSpItOl0x0NV9hjX0Uj5YjOJ7bGzOTY.jpg" alt="logo"/>
      </div>
      <div className="navbar-inner">
        <Link to="/" id="Links"> Home </Link>
        <Link to="/Contact" id="Links"> Contact </Link>
        <Link to="/Work" id="Links"> Work </Link>
        <Link to="/view" id="Links"> About </Link>
        <Link to="/skills" id="Links">Skills</Link>
      </div>
      
    </div>
  );
}

export default Header;

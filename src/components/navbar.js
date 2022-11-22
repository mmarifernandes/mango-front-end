import React from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './navbar.css';
import icon from "../images/mango.png";
const Navbar = () => {
    return (
    <nav className="navbar">
    <img src={icon} className="icon" alt="mango icon"/>
    <h1 className="title">Mango</h1>
    {/* <a className="navbar-brand" href="#h">
        Mango
    </a> */}
{/* 
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#a">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#b">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#c">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
  
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#e">
                Action
              </a>
              <a className="dropdown-item" href="#f">
                Another action
              </a>
              <a className="dropdown-item" href="#g">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div> */}
    </nav>
    )
}


export default Navbar;

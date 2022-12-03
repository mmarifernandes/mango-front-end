import React, {useEffect, useState} from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './navbar.css';
import icon from "../images/mango.png";
import { getData } from "../Model";


const Navbar = () => {
  
  
  const [user, setUser] = useState("");

useEffect(() => {
  (async () => {
    let res = await getData();
    if (res) {
      setUser(res);
      // console.log(user.user.imgperfil);
    } else {
      console.log("erro");
      // return navigate("/auth");
    }
  })();
}, [user]);



    return (
    <nav className="navbar">
    <img src={icon} className="icon" alt="mango icon"/>
    <h1 className="title">Mango</h1>
    {user?
    <><img
            src={`data:image/png;base64,${user.user.imgperfil}`}
            className="imgperfil"
            alt="icon" /><p className="nome">{user.user.nome}</p></>
  : null }
    </nav>
    )
}


export default Navbar;

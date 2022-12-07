import React, {useEffect, useState} from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './navbar.css';
import icon from "../images/mango.png";
import { getData } from "../Model";
import TextField from "@mui/material/TextField";
import List from "../components/list"
import { useNavigate } from "react-router-dom";


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
 const [inputText, setInputText] = useState("");
 let inputHandler = (el) => {
   //convert input text to lower case
   var lowerCase = el.target.value.toLowerCase();
   setInputText(lowerCase);
 };

   const navigate = useNavigate();

 const navigateCollection = () => {
   navigate('/')
 };

    return (
    <nav className="navbar">
      {/* <div onClick={navigateCollection}> */}
    <img src={icon} className="icon" alt="mango icon" onClick={navigateCollection}/>
    <h1 className="title" onClick={navigateCollection}>Mango</h1>
    {/* </div> */}
     <div className="list">
      <div className="search2">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
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

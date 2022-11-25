import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './login.css';
// import { getData, insert } from "./Model.js"
// import icon from "../images/mango.png";
import axios from 'axios';

const Login = () => {
  // useEffect(() => {
  //      let items = getData();
  // })

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");



  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, senha)
      await axios.post(`http://localhost:5000/usuarios/auth`, {
        senha: senha,
        email: email,
      });


    } catch (error) {
      return console.log(error);
    }
  };


  return (

    <div className="grid">
      <h1>Entrar</h1>
      < form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>Senha:
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
       
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default Login;
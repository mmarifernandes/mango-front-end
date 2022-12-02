import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './signup.css';
// import { getData, insert } from "./Model.js"
// import icon from "../images/mango.png";
import axios from 'axios';

const SignUp = () => {
  // useEffect(() => {
  //      let items = getData();
  // })

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState([]);
console.log(foto)


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
        formData.append('imgperfil', foto)
        formData.append('nome', nome)
        formData.append('email', email)
        formData.append('senha', senha)
      console.log(foto)
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };
      console.log(nome, email, senha, {foto})
      await axios.post(`http://localhost:5000/usuarios/cadastrar`, formData, config);


    } catch (error) {
      return console.log(error);
    }
  };


  return (

    <div className="grid">
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
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
        <label>Foto:
          <input type="file" onChange={(e) => setFoto(e.target.files[0])} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default SignUp;
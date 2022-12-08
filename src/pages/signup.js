import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../images/mango.png";
import "./signup.css";
import axios from "axios";
import "./login.css";
import "./util.css";



const SignUp = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState([]);
  console.log(foto);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("imgperfil", foto);
      formData.append("nome", nome);
      formData.append("email", email);
      formData.append("senha", senha);
      console.log(foto);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      console.log(nome, email, senha, { foto });
      await axios.post(
        `http://localhost:5000/usuarios/cadastrar`,
        formData,
        config
      );

      navigate("/auth");
    } catch (error) {
      return alert("Algo deu errado, tente novamente.");
    }
  };
  const navigateLogin = () => {
    navigate("/auth");
  };

  return (
    <div className="gridlogin">
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form
              onSubmit={handleSubmit}
              className="login100-form validate-form p-l-55 p-r-55 p-t-178"
            >
              <span className="login100-form-title">Sign Up
                   <img
        src={icon}
        className="icon"
        alt="mango icon"
      
      /></span>

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input100"
                  placeholder="Nome"
                  required
                />
                <span className="focus-input100"></span>
              </div>

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input100"
                  placeholder="Email"
                  required
                />
                <span className="focus-input100"></span>
              </div>

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="input100"
                  placeholder="Senha"
                  required
                />
                <span className="focus-input100"></span>
              </div>

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="file"
                  onChange={(e) => setFoto(e.target.files[0])}
                  className="input100"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Sign Up
                </button>
              </div>
              <div className="flex-col-c p-t-100 p-b-40">
                <span className="txt1 p-b-9">Already have an account?</span>

                <p onClick={navigateLogin} className="txt3">
                  Sign In now
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

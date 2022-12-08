import React, { useState } from "react";
import "./login.css";
import "./util.css";
import icon from "../images/mango.png";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, senha);
      let res = await axios.post(`http://localhost:5000/usuarios/auth`, {
        senha: senha,
        email: email,
      });
      console.log({ data: res.data });

      const { token } = res.data;
      console.log({ token });
      axios.defaults.headers.common["Authorization"] = token;

      setUser(res);
    } catch (error) {
      alert(
        "Essa conta não existe mais ou o email/senha estão incorretos, tente novamente!"
      );
      return console.log(error);
    }
  };

  const navigateCadastro = () => {
    navigate("/cadastrar");
  };
  return (
    <div className="gridlogin">
      {user && <Navigate to="/" replace={true} />}
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="login100-form validate-form p-l-55 p-r-55 p-t-178"
            >
              <span className="login100-form-title">Sign In
              <img
        src={icon}
        className="icon"
        alt="mango icon"
      
      />
              </span>

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input100"
                  placeholder="Digite seu email"
                  required
                />
                <span className="focus-input100"></span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="input100"
                  placeholder="Digite sua senha"
                  required
                />
                <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Sign in
                </button>
              </div>

              <div className="flex-col-c p-t-100 p-b-40">
                <span className="txt1 p-b-9">Don't have an account?</span>

                <p onClick={navigateCadastro} className="txt3">
                  Sign up now
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

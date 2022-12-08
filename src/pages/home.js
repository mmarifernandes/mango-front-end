import React, { useState, useEffect } from "react";

import "./home.css";
import { getDataLimited } from "../Model";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Modal from '../components/modal';
import Progress from "../components/progress-bar"
import axios from "axios";




const Home = () => {



  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let items = await getDataLimited();
      if (items) {
        setItem(items);
        // console.log(items);
      } else {
        console.log("erro");
        return navigate("/auth");
      }
    })();
  }, [item, navigate]);


 let deletefunction = async (e) => {
   try {
      await axios.put(`http://localhost:5000/usuarios/delete`)
      navigate("/auth");
       } catch (error) {
         return console.log(error);
       }
  }



  const navigateCollection = () => {
    navigate('/collection')
  };
  return (
    <>
      <Navbar />
      <div className="grid">
        {item !== "" && (
          <>

         
            <div className="block1">
              <img
                src={`data:image/png;base64,${item.user.imgperfil}`}
                className="img-icon"
                alt="icon"
              />
              <hr className="line"></hr>
              <h3 className="itemtitle">Estatísticas</h3>
              <h4 className="iteminfo">Coleção status</h4>
                  <Progress count={item.total} goal={item.totalitem} />

            </div>
            <div className="info">
              <h1>{item.user.nome}'s profile</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
            <div className="middle-block">
              <h1 className="collection">Collection preview</h1>
              <div className="items">
              {item.dex.map((itens) => (
                <div className="style-itens" key={itens.book.id}>
                  <>
                    <>
                      <img
                        src={`data:image/png;base64,${itens.img}`}
                        className="img-item"
                        alt="mango icon"
                        />
                    </>
                    <p>{itens.book.titulo}</p>
                    <p>{itens.book.autor}</p>
                  </>
                </div>
              ))}
              </div>

            </div>
              <button className="botao1" onClick={navigateCollection}>Ver coleção completa </button>

              <button className="botao" onClick={() => setIsOpen(true)}>Adicionar a coleção</button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
            <div className="block2">
              <button className="deletebuttom" onClick={deletefunction}>Deletar conta</button>
            </div>
          </>
        )} 
       
      </div>
    </>
  );
};

export default Home;

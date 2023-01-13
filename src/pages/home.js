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
  const [isBio, setIsBio] = useState(false);
  const [bio, setBio] = useState("");

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


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
    
      console.log(formData)
      await axios.put(`http://localhost:5000/usuarios/bio`, {
        bio: bio
      });
      return alert("Adicionado!");
    } catch (error) {
      return alert("Erro");
    }
  };

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
              {/* <hr className="line"></hr> */}
              <button className="botao" onClick={navigateCollection}>Ver coleção completa </button>
              <button className="botao" onClick={() => setIsOpen(true)}>Adicionar a coleção</button>

            </div>
            <div className="info">
              <h1>{item.user.nome}'s profile</h1>
              <p>
               {item.user.bio}
              </p>
              <button className="botao" onClick={() => setIsBio(true)}>Editar</button>
              {isBio && 
            <form
              id="form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
                <input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  required
                />
                <button type="submit">
                Enviar
              </button>
            </form>
              }

            </div>
            <div className="middle-block">

               <div className="stats">
              <h3 className="itemtitle">Estatísticas</h3>
              <h4 className="iteminfo">Coleção status</h4>
                  <Progress count={item.total} goal={item.totalitem} />
              </div>
             

            </div>
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

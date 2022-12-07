import React, { useState, useEffect } from "react";

import "./home.css";
import { getDataEmail} from "../Model";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Modal from '../components/modal';
import { useParams } from "react-router-dom";




const Profile = () => {



  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const navigate = useNavigate();
  let { email } = useParams();


  useEffect(() => {
    (async () => {
      let items = await getDataEmail(email);
      if (items) {
        setItem(items);
        console.log(items);
      } else {
        console.log("erro");
        return navigate("/auth");
      }
    })();
  }, [email, item, navigate]);

// console.log(email)
  const navigateCollection = () => {
    navigate('/collection')
  };
  return (
    <>
      <Navbar />
      <div className="grid">
        {item && (
          <>

         
            <div className="block1">
              <img
                src={`data:image/png;base64,${item.user.imgperfil}`}
                className="img-icon"
                alt="icon"
              />
              <hr className="line"></hr>
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
              <h1 className="collection">Collection</h1>
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
                    <p>{itens.book.autor}</p>
                    <p>{itens.book.titulo}</p>
                  </>
                </div>
              ))}
              </div>
            <p onClick={navigateCollection} className="vermais">Ver coleção completa</p>
            </div>
          
            <div className="block2">
            </div>
          </>
        )}
        {/* <button onClick={navigateCollection}>Ver coleção completa</button> */}
      </div>
    </>
  );
};

export default Profile;
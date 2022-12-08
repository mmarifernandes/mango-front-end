import React, { useState, useEffect } from "react";

import "./collection.css";
import { getData } from "../Model";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal";

const Collection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let items = await getData();
      if (items) {
        setItem(items);
        // console.log(items.dex.slice(1,2));
      } else {
        console.log("erro");
        return navigate("/auth");
      }
    })();
  }, [item, navigate]);

  // useEffect(() => {
  //   (async () => {
  //     let res = await axios.get(`http://localhost:6004/api/books?count=${count}&page=${page}`);
  //     if (res) {
  //       setItem(res);
  //       // console.log(items.dex.slice(1,2));
  //     } else {
  //       console.log("erro");
  //       return navigate("/auth");
  //     }
  //   })();
  // }, [item, navigate]);

  return (
    <>
      <Navbar />
      <div className="grid">
        {item && (
          <>
            <div className="block">
              <h1 className="collection">{item.user.nome}'s full collection</h1>
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
            </div>
            <button className="botaoadd" onClick={() => setIsOpen(true)}>
              Adicionar a coleção
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
          </>
        )}
      </div>
    </>
  );
};

export default Collection;

import React, { useState, useEffect } from "react";

import "./collection.css";
import { getAll } from "../Model";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CollectionProfile = () => {
  const [item, setItem] = useState("");
    let { email } = useParams();
  console.log(email)
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let items = await getAll(email);
      if (items) {
        setItem(items);
        // console.log(items.dex.slice(1,2));
      } else {
        console.log("erro");
        return navigate("/auth");
      }
    })();
  }, [email, item, navigate]);

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
                      <p>{itens.book.titulo}</p>
                      <p>{itens.book.autor}</p>
                    </>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CollectionProfile;

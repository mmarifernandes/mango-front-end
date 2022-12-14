import React, { useState, useEffect } from "react";
import "./modal.css";
import axios from "axios";
import { getData } from "../Model";

const Modal = ({ setIsOpen }) => {
  const [item, setItem] = useState([]);
  const [selected, setSelected] = useState([]);
  const [foto, setFoto] = useState([]);
  const [user, setUser] = useState([]);
  // console.log(foto)

  useEffect(() => {
    async function getItens() {
      const res = await axios.get(`http://localhost:5000/dex/listAll`);
      setItem(res.data);
    }
    // if (res) {
    getItens();
    // }
    // console.log(item)
  }, [item]);

  useEffect(() => {
    (async () => {
      let res = await getData();
      if (res) {
        setUser(res);
        // console.log(items);
      } else {
        console.log("erro");
        // return navigate("/auth");
      }
    })();
  }, [user]);

  // console.log(selected)
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("img", foto);
      formData.append("id_book", selected);
      formData.append("usuarioEmail", user.user.email);
      console.log(user);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      await axios.post(`http://localhost:5000/dex/`, formData, config);
      return alert("Adicionado!");
    } catch (error) {
      return alert("Esse item já está na sua coleção!");
    }
  };

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Adicionar a coleção</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="modalContent">
            <form
              id="form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <select
                name="userId"
                onChange={(e) => setSelected(e.target.value)}
                required
              >
                <option value="0">Escolha um item</option>
                {item.map((value) => (
                  <option value={value.id_book} key={value.id_book}>
                    {value.titulo}
                  </option>
                ))}
              </select>
              <br></br>
              <br></br>
              <label>
                Foto:
                <input
                  type="file"
                  onChange={(e) => setFoto(e.target.files[0])}
                  required
                />
              </label>
              {foto.length !== 0 && (
                <img
                  src={URL.createObjectURL(foto)}
                  alt="icon"
                  className="showimg"
                />
              )}
              {/* <button type="submit">Submit</button> */}
            </form>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Cancelar
              </button>
              <button className="cancelBtn" form="form" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

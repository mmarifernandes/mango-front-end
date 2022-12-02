import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './home.css';
import { getData } from "../Model"
import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom";


const Home = () => {

    
    const [item, setItem] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            let items = await getData();
            if(items){
                setItem(items)
                console.log(items)
            }else{
                console.log("erro")
                return navigate('/auth')
            }
 
          })();
        },[item, navigate])


        return (

            <><Navbar /><div className="grid">
            {item &&(
                <><div className="block1">
                    </div>
                    <div className="info">
                    <h1>{item.user.nome}</h1>
                    </div>
                    <div className="middle-block">

            {item.dex.map((itens) => (
                        <div className="style-itens">
                <><><img src={"../images/book.jpg"} className="img-item" alt="mango icon" /></><p>{itens.book.autor}</p><p>{itens.book.titulo}</p></>
                
      </div>
                ))}
                        </div><div className="block2">

                        </div></>
                    )}
                    
            </div></>
        )
}


export default Home;
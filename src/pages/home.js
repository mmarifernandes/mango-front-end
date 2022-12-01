import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './home.css';
import { getData } from "../Model"
import Navbar from "../components/navbar"

const Home = () => {


    const [item, setItem] = useState("");


    useEffect(() => {
         (async () => {
         let items = await getData();
         setItem(items)
         console.log(items)
          })();
        },[item])
        


        return (
                <><Navbar /><div className="grid">
                    {/* <h1>{item.nome}</h1> */}
                <div className="block1">

                </div>

                <div className="middle-block">

                </div>

                <div className="block2">

                </div>
            </div></>
        )
}


export default Home;
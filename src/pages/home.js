import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './home.css';
import { getData } from "../Model"
import Navbar from "../components/navbar"
import { Navigate } from "react-router-dom";


const Home = () => {


    const [item, setItem] = useState("");

    useEffect(() => {
         (async () => {
         let items = await getData();
         if(items){
             setItem(items)

         }else{
             
             <Navigate to="/auth" replace={true} />
             console.log("erro")
        }
          })();
        },[item])
        console.log(res.data)


        return (
                <><Navbar /><div className="grid">
                <div className="block1">

                </div>
                {/* {item? */}
                    {/* <h1>{item.user.nome}</h1> */}
                    {/* : */}

                {/* }  */}

                <div className="middle-block">

                </div>

                <div className="block2">

                </div>
            </div></>
        )
}


export default Home;
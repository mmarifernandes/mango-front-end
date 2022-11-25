import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import './home.css';
import { getData, insert } from "../Model"
import Navbar from "../components/navbar"

const Home = () => {
    useEffect(() => {
         let items = getData();
    })



        return (
                <><Navbar /><div className="grid">
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
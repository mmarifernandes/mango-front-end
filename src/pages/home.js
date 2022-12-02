import React, { useState, useEffect } from "react";

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
            if (items) {
                setItem(items)
                console.log(items)
            } else {
                console.log("erro")
                return navigate('/auth')
            }

        })();
    }, [item, navigate])


    return (

        <><Navbar /><div className="grid">
            {item && (
                <><div className="block1">
                    <img src={`data:image/png;base64,${item.user.imgperfil}`} className="img-icon" alt="icon" />
                </div>
                    <div className="info">
                        <h1>{item.user.nome}'s profile</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
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
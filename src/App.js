import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import Navbar from "./components/navbar.js"
import Home from "./pages/home.js"
import SignUp from "./pages/signup.js"
import Login from "./pages/login.js"
import Collection from "./pages/collection.js"
import Profile from "./pages/profile.js"

function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/cadastrar' element={<SignUp />} />
        <Route exact path='/auth' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/collection' element={<Collection />} />
        <Route exact path="/profile/:email" element ={<Profile />}/>
        {/* <Route path='/sign-up' element={<SignUp/>} /> */}
    </Routes>
    </Router>
);
}
export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from "./components/navbar.js"
import Home from "./pages/home.js"

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route path='/sign-up' element={<SignUp/>} /> */}
    </Routes>
    </Router>
);
}
export default App;

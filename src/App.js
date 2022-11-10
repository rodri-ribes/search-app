import React from "react";
import { Route, Routes } from 'react-router-dom'
import './app.css'
// ------------ COMPONENTS ------------

import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import ContentDetail from "./pages/ContentDetail/ContentDetail";
import Favorites from "./pages/Favorites/Favorites";

function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category/:id" element={<ContentDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./stores/Pages/LandingPages";
import Kitchen from "./stores/Components/Kitchen";
import MobilePage from "./stores/Pages/MobilePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = { <LandingPage /> }/>
        <Route path="/abc" element = { <Kitchen /> }/>
        <Route path="/mobiles" element = { <MobilePage /> }/>
  
      </Routes>
    </div>
  )
}

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./stores/Pages/LandingPages";
import Kitchen from "./stores/Components/Kitchen";
import MobilePage from "./stores/Pages/MobilePage";
import KitchenPage from "./stores/Pages/KitchenPage";
import ComputerPage from "./stores/Pages/ComputerPage";
import MenPage from "./stores/Pages/MenPage";
import WomanPage from "./stores/Pages/WomanPage";
import WatchPage from "./stores/Pages/WatchPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = { <LandingPage /> }/>
        <Route path="/kitchen" element = { <KitchenPage /> }/>
        <Route path="/mobiles" element = { <MobilePage /> }/>
        <Route path="/computers" element = { <ComputerPage /> }/>
        <Route path="/men" element = { <MenPage /> }/>
        <Route path="/woman" element = { <WomanPage/> }/>
        <Route path="/watch" element = { <WatchPage/> }/>
        <Route path="/ac" element = { < }/>
        
      </Routes>
    </div>
  )
}

export default App;
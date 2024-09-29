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
import AcPage from "./stores/Pages/AcPage";
import FurniturePage from "./stores/Pages/FurniturePage";
import FridgePage from "./stores/Pages/FridgePage";
import MobileSingle from "./stores/Singles/MobileSingle";
import UserCart from "./stores/UserCart";
import AcSingle from "./stores/Singles/AcSingle";
import ComputerSingle from "./stores/Singles/ComputerSingle";
import FurnitureSingle from "./stores/Singles/FurnitureSingle";
import KitchenSingle from "./stores/Singles/KitchenSingle";
import MenSingle from "./stores/Singles/MenSingle";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/computers" element={<ComputerPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/fridge" element={<FridgePage />} />

        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/cart' element={<UserCart />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/computers/:id' element={<ComputerSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/watch/:id' element={<WatchS />} />
        {/* <Route path='/woman/:id' element={<WomanSingle />} /> */}
        {/* <Route path='/fridge/:id' element={<FridgeSingle />} /> */}
      </Routes>
    </div>
  )
}

export default App;
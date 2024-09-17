import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import RoomDetails from './Pages/RoomDetails';
import { createBrowserRoute, RouterProvider } from "react-router-dom";

const router = createBrowserRoute([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/room/:id',
    element: <RoomDetails/>
  }
]);

const App = () => {
  return (
    <div>
      react app
    </div>
  )
};

export default App;
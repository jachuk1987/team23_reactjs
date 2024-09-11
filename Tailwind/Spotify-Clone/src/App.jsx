import React, { useContext } from "react"
import Sidebar from "./Components/Sidebar"
import Player from "./Components/Player"
import Display from "./Components/Display"
import PlayerContextProvider from "./Context/PlayerContext"

const App = () => {

  const {audioRef} = useContext(PlayerContextProvider)

  return (
    <div className="h-screen bg-black ">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} preload="auto"></audio>
    </div>
  )
}

export default App

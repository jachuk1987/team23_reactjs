import React, { createContext, useState } from "react";
import { roomData } from "../Data";

export const RoomContext = createContext();


const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState(roomData);
    console.log(roomData);
    return (
        <RoomContext.Provider value={'room context'}>
            {children}
        </RoomContext.Provider>
    )
};

export default RoomProvider;
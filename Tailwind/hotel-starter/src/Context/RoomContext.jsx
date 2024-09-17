import React, { createContext, useState } from "react";
import { roomData } from "../Data";

export const RoomContext = createContext();


const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState(roomData);

    return (
        <RoomContext.Provider value={{ rooms }}>
            {children}
        </RoomContext.Provider>
    )
};

export default RoomProvider;
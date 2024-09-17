import React, { useContext } from 'react';
import { RoomContext } from "../Context/RoomContext";
import Room from './Room';

const Rooms = () => {
    const { rooms } = useContext(RoomContext);
    console.log(rooms);
    return <section className='bg-pink-200 py-24'>
        <div className='container mx-auto'></div>
    </section>;
};

export default Rooms;
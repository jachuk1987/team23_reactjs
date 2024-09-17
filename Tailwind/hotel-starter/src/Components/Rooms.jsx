import React, { useContext } from "..react";
import { RoomContext } from "./Context/RoomContext";
import Room from './Room';

const Rooms = () => {
    const { rooms } = useContext(RoomContext);
    return (
        <section className='py-24'>
            <div className='container mx-auto lg:px-0'>
                {/*grid*/}
                <div>
                    {rooms.map((room) => {
                        return <Room room={room} key={room.id} />
                    })}
                </div>
            </div>
        </section>
    )
};

export default Rooms;
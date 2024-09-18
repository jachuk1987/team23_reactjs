import React, { useContext } from "react";
import { RoomContext } from "../Context/RoomContext";
import Room from './Room';
import { SpinnerDotted } from "spinners-react";

const Rooms = () => {
    const { rooms, loading } = useContext(RoomContext);

    return (
        <section className='py-24'>
            {/* overlay & spinner */}
            {loading && (
                <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full
                 z-50 flex justify-center items-center">
                    <SpinnerDotted />
                </div>
            )}
            <div className='container mx-auto lg:px-0'>
                {/*grid*/}
                <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
                    {rooms.map((room) => {
                        return <Room room={room} key={room.id} />
                    })}
                </div>
            </div>
        </section>
    )
};

export default Rooms;
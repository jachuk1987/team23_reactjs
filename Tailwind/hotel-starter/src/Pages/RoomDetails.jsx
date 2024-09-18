import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AdultsDropDown from "../Components/AdultsDropDown";
import KidsDropDown from "../Components/KidsDropDown";
import CheckIn from "../Components/CheckIn";
import CheckOut from "../Components/CheckOut";
import ScrollToTop from "../Components/ScrollToTop";
import { RoomContext } from "../Context/RoomContext";
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
    const {rooms} = useContext(RoomContext);
    const { id } = useParams();

    const room =rooms.find((room) => {
        return room.id === Number(id);
    });

    const {name, description, facilities, imageLg, price } = room;
    return (
        <section>
            {/* banner */}
            <div className="bg-room bg-cover bg-center h-[560px] relative flex
            justify-center items-center">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/70"></div>
                {/* title */}
                <h1 className="text-6x1 text-white z-20 font-primary text-center">{name} Details</h1>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row h-full py-24">
                    {/* Left */}
                    <div className="w-full h-full lg:w-[60%] px-6 bg-yellow-300" >
                        
                    </div>
                    {/* right */}
                    <div className="w-full h-full lg:w-[40%] bg-blue-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. atque
                        error corrupti, ratione nemo dolor, magni blanditiis dicta
                        aliquid
                    </div>
                </div>
            </div>
        </section>
    )
};

export default RoomDetails;
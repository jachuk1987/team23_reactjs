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
    const { rooms } = useContext(RoomContext);
    const { id } = useParams();

    const room = rooms.find((room) => {
        return room.id === Number(id);
    });

    const { name, description, facilities, imageLg, price } = room;
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
                    <div className="w-full h-full lg:w-[60%] px-6" >
                        <h2 className="h2">{name}</h2>
                        <p className="mb-8">{description}</p>
                        <img className="mb-8" src={imageLg} alt="" />
                        {/* facilities */}
                        <div className="mt-12">
                            <h3 className="h3 mb-3">Room Facilities</h3>
                            <p className="mb-12">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Porro
                                officiis voluptas mollitia repellendus sed iure a ea vero
                                atque
                                repudiandae! necessitatibus facere laborum nam error
                                blanditiis
                                culpa reprehenderit quibusdam quis?
                            </p>
                            {/* grid */}
                            <div className="grid grid-cols-3 gap-6 mb-12">
                                {facilities.map((item, index) => {
                                    const { name, icon } = item;
                                    return (
                                        <div className="flex items-center gap-x-3 flex-1" key={index}>
                                            <div className="text-3x1 text-accent">{icon}</div>
                                            <div className="text-base">{name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-full h-full lg:w-[40%] bg-blue-300">
                        {/* reservation */ }
                        <div className="py-8 px-6 bg-accent/20 mb-12">
                            <div className="flex flex-col space-y-4 mb-4">
                                <h3>Your Reservation</h3>
                                <div>
                                    <CheckIn/>
                                </div>
                                <div>
                                    <CheckOut/>
                                </div>
                                <div>
                                    <AdultsDropDown/>
                                </div>
                                <div>
                                    <KidsDropDown/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default RoomDetails;
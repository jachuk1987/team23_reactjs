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
        <section className="bg-pink-200">
            {/* banner */}
            <div className="bg-room bg-cover h-[560px]"></div>
            RoomDetails
        </section>
    )
};

export default RoomDetails;
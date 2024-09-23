import React from "react";
import { mobileData } from "../data/mobiles";

const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)
    
    return (
        <div className="proSection">
            {
                mobileData.map((item) => {
                    return (
                        <div className="imgBox">
                            <img className="proImage" src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Mobiles;
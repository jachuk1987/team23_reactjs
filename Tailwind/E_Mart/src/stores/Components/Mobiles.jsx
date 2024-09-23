import React from "react";
import { mobileData } from "../data/mobiles";

const Mobiles = () => {
    return (
        <div>
            {
                mobileData.map((item) => {
                    return (
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Mobiles;
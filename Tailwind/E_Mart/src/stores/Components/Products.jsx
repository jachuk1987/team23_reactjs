import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computer";
import Men from "./Men";
import Woman from "./Woman";
import Watch from "./Watch";
import AC from "./AC";
import Furnitures from "./Furnitures";
import Books from "./Books";
import Fridge from "./Fridge";
import Kitchen from "./Kitchen";

const Products = () => {
    return (
        <div>
            <Mobiles />
            <Computers />
            <Men />
            <Woman />
            <Watch />
            <AC />
            <Furnitures/>
            <Books />
            <Fridge />
            <Kitchen />
        </div>
    )
}

export default Products;
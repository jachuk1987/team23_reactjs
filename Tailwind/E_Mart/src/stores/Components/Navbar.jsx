import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";

const Navbar = () => {

    const { cartItems } = useCart()

    return (
        <>
            <div className="navSection">
                <div className="title">
                    <h2>E-Mart</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="user">
                    <div className="user-details">
                        SignIn/SignUp
                    </div>
                    <Link to="/cart">
                    <div className="cart"> Cart 
                        <span>
                            {cartItems}
                        </span>
                    </div>
                    </Link> 
                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to={'/mobiles'}>
                        <li>Mobiles</li>
                    </Link>

                    <Link to={'/computers'}>
                        <li>Computers</li>
                    </Link>

                    <Link to={'/men'}>
                        <li>Mens Wear</li>
                    </Link>

                    <Link to={'/woman'}>
                        <li>Woman Wear</li>
                    </Link>

                    <Link to={'/watch'}>
                        <li>Watches</li>
                    </Link>

                    <Link to={'/ac'}>
                        <li>AC</li>
                    </Link>

                    <Link to={'/furniture'}>
                        <li>Furniture</li>
                    </Link>

                    <Link to={'/'}>
                        <li>Books</li>
                    </Link>

                    <Link to={'/fridge'}>
                        <li>Refrigerator</li>
                    </Link>

                    <Link to={'/kitchen'}>
                        <li>Kitchen</li>
                    </Link>

                    <Link to={'/'}>
                        <li>Speakers</li>
                    </Link>

                    <Link to={'/'}>
                        <li>TV's</li>
                    </Link>
                
                </ul>
            </div>
        </>
    )
}

export default Navbar;
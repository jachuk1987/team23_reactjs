import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
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
                    <div className="cart"> Cart </div>
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

                    <Link to={'/ac'}>
                        <li>AC</li>
                    </Link>

                    <li>Woman Wear</li>
                    <li>Watches</li>
                    <li>Furniture</li>
                    <li>Kitchen</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
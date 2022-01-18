import React from "react";
import logo from "../icon/planet-earth.png";

export default function Navbar() {
    return(
        <nav className="navbar">
            <img className="nav--logo"src={logo} alt="planet"/>
            <p className="nav--phrase">my travel journal</p>
        </nav>
    );
}
import React  from 'react';
import logoImage from '../images/airbnb-logo.png';

export default function Navbar () {
    return(
        <nav>
            <img className="nav--logo" src={logoImage} alt="airbnb logo" />
        </nav>
    );
}
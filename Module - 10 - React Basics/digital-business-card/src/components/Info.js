import React from 'react';
import imageProfile from '../images/dev-david-01.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import About from './About';



export default function Info() {
    return(
        <div className="container">
            <img src={imageProfile} alt="my profile" />
            <h2>Franklin Macias</h2>
            <p>Frontend Developer</p>
            <a href="https://davic15.github.io/">My website</a>
            <div className="container-button">
                <button className="btn email"><FontAwesomeIcon icon={faEnvelope} className="icon"/> Email</button>
                <button className="btn link"><FontAwesomeIcon icon={faLinkedin} className="icon"/>Linkedin</button>
            </div>
            <About />
        </div>
    );
}
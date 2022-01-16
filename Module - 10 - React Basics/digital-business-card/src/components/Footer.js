import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faFacebook, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className='footer-icons'>
            <p><FontAwesomeIcon icon={faTwitterSquare } /></p>
            <p><FontAwesomeIcon icon={faFacebook } /></p>
            <p><FontAwesomeIcon icon={faInstagram } /></p>
            <p><FontAwesomeIcon icon={faGithub } /></p>
        </div>
    );
}
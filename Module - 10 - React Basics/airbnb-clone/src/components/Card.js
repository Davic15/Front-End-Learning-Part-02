import React from "react";
import imageUser from '../images/katie-zaferes.png';
import starUser from '../images/star.png';

export default function Card() {
    return (
        <div className="card">
            <img src={imageUser} alt="users" className="card--image"/>
            <div className="card--stats">
                <img src={starUser} alt="rate star" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div> 
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}
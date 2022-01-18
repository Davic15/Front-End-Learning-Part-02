import React from "react";
import starUser from '../images/star.png';

export default function Card(props) {
    console.log(props.img)
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" alt="user experiences"/>
            <div className="card--stats">
                <img src={starUser} className="card--star" alt="rating star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
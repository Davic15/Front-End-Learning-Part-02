import React from "react";
import icon from "../icon/location.png";


export default function Card(props) {
    console.log(props)
    return(
        <div className="card">
            <div className="card--image">
                <img className="card--image__place" src={`../images/${props.imageUrl}`} alt="location" />
            </div>
            <div className="card--information">
                <img className="card--information_icon" src={icon} alt="location"/>
                <p className="card--information__location">{props.location}</p>
                <a className="card--information__link" href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="card--information__title">{props.title}</h2>
                <p className="card--information__duration">{props.startDate} - {props.endDate}</p>
                <p className="card--information__information">{props.description}</p>
            </div>
        </div>
    );
}
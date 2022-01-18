import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data/data";

export default function App() {
    const cards = data.map( item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        );
    })
    return (
        <div>
            <Navbar />
            <div className="container">
                {cards}
            </div>
        </div>
    );
}
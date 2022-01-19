import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Botton text"></input>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img className="meme--image" src={memeImage} alt="new random meme"/>
        </main>
    );
}
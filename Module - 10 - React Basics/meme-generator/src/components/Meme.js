import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottonText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImage, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImage.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top text"></input>
                <input className="form--input" type="text" placeholder="Botton text"></input>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="new random meme"/>
        </main>
    );
}
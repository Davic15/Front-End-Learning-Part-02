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
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="new random meme"/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    );
}
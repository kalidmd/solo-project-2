//import MemeImg from '../images/memeimg.png';
import React, {useState} from 'react';
import MemesData from './meme-data';

export default function Main(){

    const [meme , setMeme] = useState({
        topText: "",
        bottomText: "",
        randomIMage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState(MemesData)
    
    
    function getMemeImage(){
        const memeArr = allMemeImages.data.memes
        let randomIndex = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomIndex].url
        const topText = memeArr[randomIndex].name

        setMeme(prevMeme=>({
            ...prevMeme,
            topText: topText,
            bottomText: "There",
            randomIMage: url
        }))
        
    }
    
    return(
        <div className="main">
            <div className="form">
                <input id='top-txt' type="text" placeholder="Type Top Here" />
                <input id="bottom-txt" type="text" placeholder="Type Bottom Here"/>
            </div>
            <button onClick={getMemeImage} className="main--btn">
                Get a new meme image 🖼
            </button>

            <div className="main--img-cont">
                <img src={meme.randomIMage} alt="" />
                <div className="overlay">
                    <p className="meme-text top-text">{meme.topText}</p>
                    <p className="meme-text bottom-text">{meme.bottomText}</p>
                </div>
            </div>
        </div>)
    
}
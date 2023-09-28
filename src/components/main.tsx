//import MemeImg from '../images/memeimg.png';
import React, {useState} from 'react';
import MemesData from './meme-data';

export default function Main(){
    const [allMemeImages, setAllMemeImages] = useState(MemesData)
    
    const [meme , setMeme] = useState({
        topText: "",
        bottomText: "",
        randomIMage: ""
    })

    function getMemeImage(){
        const memeArr = allMemeImages.data.memes
        let randomIndex = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomIndex].url 

        setMeme(prevMeme => ({
            ...prevMeme,
            randomIMage: url
        }))
    }

    function handleChange(event: any){
        let {name, type, value} = event.target
        setMeme(prevData => ({
            ...prevData, 
            [name]: value
        }))
    }

    function submitChange(event: any){
        event.preventDefault()
        console.log(meme);        
    }
    
    return(
        <div className="main">
            <form onSubmit={submitChange} className="form">
                <input 
                    id='top-txt' 
                    type="text" 
                    name='topText'
                    value={meme.topText}
                    placeholder="Type Top Here" 
                    onChange={handleChange}
                />
                
                <input 
                    id="bottom-txt" 
                    type="text" 
                    name='bottomText'
                    value={meme.bottomText}
                    placeholder="Type Bottom Here"
                    onChange={handleChange}
                />
                 <button onClick={getMemeImage} className="main--btn">
                        Get a new meme image 🖼
                </button>
            </form>

            <div className="main--img-cont">
                <img src={meme.randomIMage} alt="" />
                <div className="overlay">
                    <p className="meme-text top-text">{meme.topText}</p>
                    <p className="meme-text bottom-text">{meme.bottomText}</p>
                </div>
            </div>
        </div>)
    
}
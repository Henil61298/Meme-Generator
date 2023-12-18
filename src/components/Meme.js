import React, { useEffect, useState } from "react";

function Meme(props){
    const d = props.data;

    let [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: d[0].url,
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(function(){
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function changeImage(){
        let rand = Math.floor(Math.random() * (allMemes.length));
        const url = allMemes[rand].url;
        setMeme(image => {
            return {
                ...image, 
                randomImage : url
            };
        })
    }


    function changeHandler(event){
        const {name, value} = event.target;
        setMeme(items => {
            return {
                ...items,
                [name]: value
            };
        })
    }

    return (
        <main>
            <div className="grid-container">
                <input 
                className="form-inputs" 
                type="text" 
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={changeHandler}
                />
                <input 
                className="form-inputs" 
                type="text" 
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={changeHandler}
                ></input>
                <button 
                className="form-button" 
                onClick={changeImage}
                type="submit"
                >Get a new meme image 🌄</button>
                <div className="box">
                    <img className="meme-img" src={meme.randomImage}></img>
                    <h1 className="top">{meme.topText}</h1>
                    <h1 className="bot">{meme.bottomText} </h1>
                </div>
            </div>
        </main>
    )
}

export default Meme;
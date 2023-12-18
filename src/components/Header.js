import React from "react";
import image from './Troll Face.png';

function Header(){
    return (
        <header className="header">
            <img src={image} className="header-image"></img>
            <h2 className="header-title">Meme Generator</h2>
            <h3 className="header-project">React project - 3</h3>
        </header>
    )
}

export default Header;
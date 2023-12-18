import React, { useEffect, useState } from "react";

function Show(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function watchWidth(){
            console.log("Settin up...");
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", watchWidth);

        return function(){
            console.log("Cleaning up...");
            window.removeEventListener("resize", watchWidth);
        }
    }, [])
    return (
        <h1>{windowWidth}</h1>
    )
}

export default Show;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function MemeGeneratorNav(params) {
    return(
        <nav className="meme-nav py-2">
            <img className="nav-img pe-2" src="./skull.PNG"  alt="skull" />
            <h4 className="pt-1 meme-generator">Meme Generator</h4> 
        </nav>
    )
}

export default MemeGeneratorNav
import React from "react";
import MemeGeneratorNav from "./MemeGeneratorNav";
import MemeBody from "./MemeBody";

function MemeGenerator(params) {
    return(
        <section className="container w-75">
            <MemeGeneratorNav />
            <MemeBody />
        </section>
    )
}

export default MemeGenerator
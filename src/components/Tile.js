import React from "react";

function Tile({img, imgDescription, title, children}) {
    if (img && imgDescription) {
        return (
            <section>
                <img src={img} alt={imgDescription}/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        )
    }
};

export default Tile;
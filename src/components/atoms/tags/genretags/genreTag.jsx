import React from "react";

function GenreTag({ children, text }) {
    return(
        <div className="cardtag">
            {children}
            <p className="cardtag__text">{text}</p>
        </div>
    )
}

export default GenreTag;
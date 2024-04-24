import React from "react";

function GenreCard({ genre }) {

    return(
        <a className="genrecard">
            <p className="genrecard__title">{genre}</p>
        </a>
    )
}

export default GenreCard;
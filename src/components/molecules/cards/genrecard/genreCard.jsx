import React from "react";

function GenreCard({ genre }) {

    return(
        <div className="genrecard">
            <p className="genrecard__title">{genre}</p>
        </div>
    )
}

export default GenreCard;
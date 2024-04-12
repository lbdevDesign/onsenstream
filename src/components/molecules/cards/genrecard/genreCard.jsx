import React from "react";

function GenreCard({ genre, movies }) {

    const showCovers = movies.slice(0,4);
    let showCoversUrl = [];
    for (const item of showCovers) {
        showCoversUrl.push(item.img);
    }



    return(
        <a className="genrecard">
            <div className="genrecard__imggrid">
                {showCoversUrl.map((item, index) => (
                    <img key={index} src={item} alt="films" className="genrecard__imggrid__item"/>
                ))}
            </div>
            <div className="genrecard__overlay"></div>
            <p className="genrecard__title">{genre}</p>
        </a>
    )
}

export default GenreCard;
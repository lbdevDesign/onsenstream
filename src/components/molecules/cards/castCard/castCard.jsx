import React from "react";

function CastCard({ ...item }) {

    const coverPath = `https://image.tmdb.org/t/p/w500${item.profile_path}`;

    return(
        <div className="castcard">
            <div className="castcard__imgbox">
                <img src={coverPath} className="castcard__imgbox__img" alt={item.name}/>
            </div>
            <p className="castcard__character">{item.character}</p>
            <p className="castcard__name">{item.name}</p>
        </div>
    )
}

export default CastCard;
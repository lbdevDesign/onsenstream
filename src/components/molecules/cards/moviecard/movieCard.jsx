import React from "react";

//Atoms
import CardTag from "../../../atoms/tags/cardtags/cardTag";

//Assets
import { ClockIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';

function MovieCard({ ...item }) {

    const coverPath = `https://image.tmdb.org/t/p/w500${item.poster_path}`

    return(
        <a className="moviecard">
            <img src={coverPath} className="moviecard__img" alt={item.title}/>
            <p className="moviecard__title">{item.title}</p>
            <div className="moviecard__infos">
                <CardTag text={item.likes}>
                    <HandThumbUpIcon className="moviecard__infos__icon" alt="Likes"/>
                    <p>{item.vote_average} / 10</p>
                </CardTag>
            </div>
        </a>
    )
}

export default MovieCard;
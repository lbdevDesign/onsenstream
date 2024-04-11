import React from "react";

//Atoms
import CardTag from "../../atoms/tags/cardtags/cardTag";

//Assets
import { ClockIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';

function MovieCard({ ...item }) {
    return(
        <a className="moviecard">
            <img src={item.img} className="moviecard__img" alt={item.title}/>
            <p className="moviecard__title">{item.title}</p>
            <div className="moviecard__infos">
                <CardTag text={item.duration}>
                    <ClockIcon className="moviecard__infos__icon" alt="Durée"/>
                </CardTag>
                {/* <div className="moviecard__infos__info">
                    <ClockIcon className="moviecard__icon" alt="Durée"/>
                    <p className="moviecard__text">{item.duration}</p>
                </div> */}
                <CardTag text={item.likes}>
                    <img src={item.plateform} className="moviecard__infos__streaming" alt="Likes"/>
                    <HandThumbUpIcon className="moviecard__infos__icon" alt="Likes"/>
                </CardTag>
                {/* <div className="moviecard__infos__info">
                    <img src={item.plateform} className="moviecard__streaming" alt="Likes"/>
                    <HandThumbUpIcon className="moviecard__icon" alt="Likes"/>
                    <p className="moviecard__text">{item.likes}</p>
                </div> */}
            </div>
        </a>
    )
}

export default MovieCard;
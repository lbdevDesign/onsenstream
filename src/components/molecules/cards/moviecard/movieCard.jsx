import React, { useState, useEffect } from "react";

function MovieCard({ ...item }) {
    const [isUpcoming, setIsUpcoming] = useState(false);

    const coverPath = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    
    useEffect(() => {
        if (item.release_date >= formattedToday) setIsUpcoming(true);
    }, [])
    
    return(
        <a className="moviecard">
            <div className="moviecard__imgbox">
                <img src={coverPath} className="moviecard__imgbox__img" alt={item.title}/>
                { isUpcoming && (<p className="moviecard__imgbox__soon">bientôt</p> )}
            </div>
            <p className="moviecard__title">{item.title}</p>
        </a>
    )
}

export default MovieCard;
import React, { useState, useEffect } from "react";

function MediaCastCard({ ...item }) {
    const [isUpcoming, setIsUpcoming] = useState(false);

    const coverPath = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    
    useEffect(() => {
        if (item.release_date >= formattedToday) setIsUpcoming(true);
    }, [formattedToday])
    
    return(
        <div className="mediacastcard">
            <div className="mediacastcard__imgbox">
                <img src={coverPath} className="mediacastcard__imgbox__img" alt={item.title}/>
                { isUpcoming && (<p className="mediacastcard__imgbox__soon">bientôt</p> )}
            </div>
            <p className="mediacastcard__title">{item.title ? item.title : item.name}</p>
        </div>
    )
}

export default MediaCastCard;
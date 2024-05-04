import React, { useState, useEffect } from "react";

function MediaCard({ ...item }) {
    const [isUpcoming, setIsUpcoming] = useState(false);

    const coverPath = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    
    useEffect(() => {
        if (item.release_date >= formattedToday) {
            setIsUpcoming(true);
        } else {
            setIsUpcoming(false);
        }
    }, [formattedToday, item.release_date ])
    
    return(
        <div className="mediacard">
            <div className="mediacard__imgbox">
                <img src={coverPath} className="mediacard__imgbox__img" alt={item.title}/>
                { isUpcoming && (<p className="mediacard__imgbox__soon">bientôt</p> )}
            </div>
            <p className="mediacard__title">{item.title ? item.title : item.name}</p>
        </div>
    )
}

export default MediaCard;
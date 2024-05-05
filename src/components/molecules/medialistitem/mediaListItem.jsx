import React, { useEffect, useState } from "react";

//Data
import useMovieData from "../../../data/movie";
import useMovieProvider from "../../../data/movieProvider";
import useSerieData from "../../../data/serie";
import useSerieProvider from "../../../data/serieProvider";

//Atoms
import ProviderTag from "../../atoms/tags/providertags/providerTag";
import GenreTag from "../../atoms/tags/genretags/genreTag";

function MediaListItem({ data, type}) {
    const [media, setMedia] = useState([]);
    const [mediaProvider, setMediaProvider ] = useState([]);

    const MovieFetch = (id) => useMovieData(id);
    const SerieFetch = (id) => useSerieData(id);
    const mediaData = type === "movie" ? MovieFetch(data.id) : SerieFetch(data.id);

    const MovieProviderFetch = (id) => useMovieProvider(id);
    const SerieProviderFetch = (id) => useSerieProvider(id);
    const mediaProviderData = type === "movie" ? MovieProviderFetch(data.id) : SerieProviderFetch(data.id);

    useEffect(() => {
        setMedia(mediaData);
        setMediaProvider(mediaProviderData);
    }, [mediaData, mediaProviderData, type])    

    console.log(media);

    return(
        <div className="Medialistitem">
            <div className="Medialistitem__poster" >
                <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} className="Medialistitem__poster--img" alt={`${media.title} poster`}/>
            </div>
            <div className="Medialistitem__details">
                {mediaProvider?.flatrate? (
                    <ProviderTag provider={mediaProvider.flatrate[0]} />
                ) : (
                    <></>
                )}
                <h1 className="Medialistitem__details__title">{type === "movie" ? media.title : media.name}</h1>
                <div className="Medialistitem__details__infos">
                    <div className="Medialistitem__details__infos__field">
                        {type === "movie" && (
                            <>
                                <p className="Medialistitem__details__infos--label">Sortie :</p>
                                <p className="Medialistitem__details__infos__param">{ media.release_date ? media.release_date.slice(0, 4) : ""}</p>
                            </>
                        )}
                        {type === "serie" && (
                            <>
                                <p className="Medialistitem__details__infos--label">Première saison :</p>
                                <p className="Medialistitem__details__infos__param">{ media.first_air_date ? media.first_air_date.slice(0, 4) : ""}</p>
                            </>
                        )}
                    </div>
                    <p className="Medialistitem__details__infos--dot">•</p>
                    <div className="Medialistitem__details__infos__field">
                        {type === "movie" && (
                            <>
                                <p className="Medialistitem__details__infos--label">Durée :</p>
                                <p className="Medialistitem__details__infos__param">{media.runtime} min</p>
                            </>
                        )}
                        {type === "serie" && (
                            <>
                                <p className="Medialistitem__details__infos--label">Cycles :</p>
                                <p className="Medialistitem__details__infos__param">{ media.number_of_seasons}</p>
                                <p className="Medialistitem__details__infos__param--small">{media.number_of_seasons > 0 ? "saisons" : "saison"}</p>
                            </>
                        )}
                    </div>
                    <p className="Medialistitem__details__infos--dot">•</p>
                    <div className="Medialistitem__details__infos__field">
                        <p className="Medialistitem__details__infos--label">Note :</p>
                        <p className="Medialistitem__details__infos__param">{media.vote_average}</p>
                        <p className="Medialistitem__details__infos__param--small">/10 ({media.vote_count} votes)</p>
                    </div>
                </div>
                
                <div className="Medialistitem__details__genres">
                    {media.genres && media.genres.map((item) => (
                        <GenreTag key={item.id} text={item.name} />
                    ))}
                </div>

                <div className="Medialistitem__details__description">
                    <p className="Medialistitem__details__description--label">Synopsis :</p>
                    <p className="Medialistitem__details__description--desc">{media.overview}</p>
                </div>
            
            </div>
        </div>
    )
}

export default MediaListItem;
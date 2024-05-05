import React from "react";

//Atoms
import ProviderTag from "../../atoms/tags/providertags/providerTag";
import GenreTag from "../../atoms/tags/genretags/genreTag";

function MediaInfos({ data, provider}) {


    return(
        <div className="Mediainfos">
            <div className="Mediainfos__poster" >
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className="Mediainfos__poster--img" alt={`${data.title} poster`}/>
            </div>
            <div className="Mediainfos__details">
                {provider?.flatrate? (
                    <ProviderTag provider={provider.flatrate[0]} />
                ) : (
                    <></>
                )}
                <h1 className="Mediainfos__details__title">{data.title}</h1>
                <div className="Mediainfos__details__infos">
                    <div className="Mediainfos__details__infos__field">
                        <p className="Mediainfos__details__infos--label">Sortie :</p>
                        <p className="Mediainfos__details__infos__param">{ data.release_date ? data.release_date.slice(0, 4) : ""}</p>
                    </div>
                    <p className="Mediainfos__details__infos--dot">•</p>
                    <div className="Mediainfos__details__infos__field">
                        <p className="Mediainfos__details__infos--label">Durée :</p>
                        <p className="Mediainfos__details__infos__param">{data.runtime} min</p>
                    </div>
                    <p className="Mediainfos__details__infos--dot">•</p>
                    <div className="Mediainfos__details__infos__field">
                        <p className="Mediainfos__details__infos--label">Note :</p>
                        <p className="Mediainfos__details__infos__param">{data.vote_average}</p>
                        <p className="Mediainfos__details__infos__param--small">/10 ({data.vote_count} votes)</p>
                    </div>
                </div>
                
                <div className="Mediainfos__details__genres">
                    {data.genres && data.genres.map((item) => (
                        <GenreTag key={item.id} text={item.name} />
                    ))}
                </div>

                <div className="Mediainfos__details__description">
                    <p className="Mediainfos__details__description--label">Synopsis :</p>
                    <p className="Mediainfos__details__description--desc">{data.overview}</p>
                </div>
            
            </div>
        </div>
    )
}

export default MediaInfos;
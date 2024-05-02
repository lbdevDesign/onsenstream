import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Organism
import Header from "../../components/organisms/header/header";

//atoms
import GenreTag from "../../components/atoms/tags/genretags/genreTag";

function Serie() {
    const { id } = useParams();
    const [serie, setSerie] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_API_KEY
            }
        }

        fetch(`https://api.themoviedb.org/3/tv/${id}?language=fr-FR`, options)
        .then(response => response.json())
        .then(response => setSerie(response))
        .catch(err => console.error(err));
    }, [id])    

    const backdropPath = `https://image.tmdb.org/t/p/w500${serie.backdrop_path}`;
    console.log(serie);    

    return(
        <>
            <Header />
            <div className="Serie">
                <div className="Serie__backdrop">
                    <div className="Serie__backdrop__fade"></div>
                    <img className="Serie__backdrop--img" src={backdropPath} alt={`backdrop ${serie.title}`} />
                </div>
                <div className="Serie__infos">
                    <div className="Serie__infos__poster" >
                        <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} className="Serie__infos__poster--img" alt={`${serie.title} poster`}/>
                    </div>
                    <div className="Serie__infos__details">
                        <h1 className="Serie__infos__details__title">{serie.name}</h1>
                        <div className="Serie__infos__details__genres">
                            {serie.genres && serie.genres.map((item) => (
                                <GenreTag key={item.id} text={item.name} />
                            ))}
                        </div>
                        <div className="Serie__infos__details__infos">
                            <div className="Serie__infos__details__infos__field">
                                <p className="Serie__infos__details__infos--label">Année :</p>
                                <p className="Serie__infos__details__infos__param">{serie.last_air_date ? serie.last_air_date.slice(0, 4) : ""}</p>
                            </div>
                            <div className="Serie__infos__details__infos__field">
                                <p className="Serie__infos__details__infos--label">Saisons :</p>
                                <p className="Serie__infos__details__infos__param">{serie.number_of_seasons}</p>
                            </div>
                            <div className="Serie__infos__details__infos__field">
                                <p className="Serie__infos__details__infos--label">Note :</p>
                                <p className="Serie__infos__details__infos__param">{serie.vote_average}</p>
                                <p className="Serie__infos__details__infos__param--small">({serie.vote_count} votes)</p>
                            </div>
                        </div>
                        <div className="Serie__infos__details__description">
                            <p className="Serie__infos__details__description--label">Synopsis :</p>
                            <p className="Serie__infos__details__description--desc">{serie.overview}</p>
                        </div>

                    </div>
                </div>
                <div className="Serie__trailer">
                    <h2>Bande d'annonce</h2>
                </div>
            </div>
        </>
    )
}

export default Serie;
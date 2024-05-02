import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Organism
import Header from "../../components/organisms/header/header";

//atoms
import GenreTag from "../../components/atoms/tags/genretags/genreTag";

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_API_KEY
            }
        }

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, options)
        .then(response => response.json())
        .then(response => setMovie(response))
        .catch(err => console.error(err));
    }, [id])    

    const backdropPath = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;    

    return(
        <>
            <Header />
            <div className="Movie">
                <div className="Movie__backdrop">
                    <div className="Movie__backdrop__fade"></div>
                    <img className="Movie__backdrop--img" src={backdropPath} alt={`backdrop ${movie.title}`} />
                </div>
                <div className="Movie__infos">
                    <div className="Movie__infos__poster" >
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="Movie__infos__poster--img" alt={`${movie.title} poster`}/>
                    </div>
                    <div className="Movie__infos__details">
                        <h1 className="Movie__infos__details__title">{movie.title}</h1>
                        <div className="Movie__infos__details__genres">
                            {movie.genres && movie.genres.map((item) => (
                                <GenreTag key={item.id} text={item.name} />
                            ))}
                        </div>
                        <div className="Movie__infos__details__infos">
                            <div className="Movie__infos__details__infos__field">
                                <p className="Movie__infos__details__infos--label">Année :</p>
                                <p className="Movie__infos__details__infos__param">{ movie.release_date ? movie.release_date.slice(0, 4) : ""}</p>
                            </div>
                            <div className="Movie__infos__details__infos__field">
                                <p className="Movie__infos__details__infos--label">Durée :</p>
                                <p className="Movie__infos__details__infos__param">{movie.runtime} min</p>
                            </div>
                            <div className="Movie__infos__details__infos__field">
                                <p className="Movie__infos__details__infos--label">Note :</p>
                                <p className="Movie__infos__details__infos__param">{movie.vote_average}</p>
                                <p className="Movie__infos__details__infos__param--small">({movie.vote_count} votes)</p>
                            </div>
                        </div>
                        <div className="Movie__infos__details__description">
                            <p className="Movie__infos__details__description--label">Synopsis :</p>
                            <p className="Movie__infos__details__description--desc">{movie.overview}</p>
                        </div>

                    </div>
                </div>
                <div className="Movie__trailer">
                    <h2>Bande d'annonce</h2>
                </div>
            </div>
        </>
    )
}

export default Movie;
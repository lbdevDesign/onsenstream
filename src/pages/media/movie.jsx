import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Data
import useMovieData from "../../data/movie";
import useMovieCast from "../../data/movieCast";
import useMovieProvider from "../../data/movieProvider";
import useMovieRecommendationsData from "../../data/movieRecommendations";

//Organism
import Header from "../../components/organisms/header/header";
import CastSlider from "../../components/organisms/castSlider/castSlider";
import MediaSlider from "../../components/organisms/mediaSlider/mediaSlider";

//atoms
import GenreTag from "../../components/atoms/tags/genretags/genreTag";
import ProviderTag from "../../components/atoms/tags/providertags/providerTag";

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const movieData = useMovieData(id);
    const [movieCast, setMovieCast] = useState([]);
    const movieCastData = useMovieCast(id);
    const [movieProvider, setMovieProvider] = useState([]);
    const movieProviderData = useMovieProvider(id);
    const [movieReco, setMovieReco] = useState([]);
    const movieRecoData = useMovieRecommendationsData(id);
    
 
    useEffect(() => {
        window.scrollTo(0, 0);
        setMovie(movieData);
        setMovieCast(movieCastData);
        setMovieProvider(movieProviderData);
        setMovieReco(movieRecoData);
    }, [movieData, movieCastData, movieProviderData, movieRecoData])    

    const backdropPath = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;     

    return(
        <>
            <Header />
            <div className="Media">
                {movie.backdrop_path ? (
                    <div className="Media__backdrop">
                        <div className="Media__backdrop__fade"></div>
                        <img className="Media__backdrop--img" src={backdropPath} alt={`backdrop ${movie.title}`} />
                    </div>
                ) : (
                    <div className="Media__backdrop">
                        <div className="Media__backdrop__fadeOSS"></div>
                    </div>
                )}
                <div className="Media__infos">
                    <div className="Media__infos__poster" >
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="Media__infos__poster--img" alt={`${movie.title} poster`}/>
                    </div>
                    <div className="Media__infos__details">
                        {movieProvider?.flatrate? (
                            <ProviderTag provider={movieProvider.flatrate[0]} />
                        ) : (
                            <></>
                        )}
                        <h1 className="Media__infos__details__title">{movie.title}</h1>
                        <div className="Media__infos__details__infos">
                            <div className="Media__infos__details__infos__field">
                                <p className="Media__infos__details__infos--label">Sortie :</p>
                                <p className="Media__infos__details__infos__param">{ movie.release_date ? movie.release_date.slice(0, 4) : ""}</p>
                            </div>
                            <p className="Media__infos__details__infos--dot">•</p>
                            <div className="Media__infos__details__infos__field">
                                <p className="Media__infos__details__infos--label">Durée :</p>
                                <p className="Media__infos__details__infos__param">{movie.runtime} min</p>
                            </div>
                            <p className="Media__infos__details__infos--dot">•</p>
                            <div className="Media__infos__details__infos__field">
                                <p className="Media__infos__details__infos--label">Note :</p>
                                <p className="Media__infos__details__infos__param">{movie.vote_average}</p>
                                <p className="Media__infos__details__infos__param--small">/10 ({movie.vote_count} votes)</p>
                            </div>
                        </div>
                        
                        <div className="Media__infos__details__genres">
                            {movie.genres && movie.genres.map((item) => (
                                <GenreTag key={item.id} text={item.name} />
                            ))}
                        </div>

                        <div className="Media__infos__details__description">
                            <p className="Media__infos__details__description--label">Synopsis :</p>
                            <p className="Media__infos__details__description--desc">{movie.overview}</p>
                        </div>
                    
                    </div>
                </div>
                <div className="Media__cast">
                    <CastSlider title="Casting" casting={movieCast}/>
                </div>
                <div className="Media__reco">
                    <MediaSlider title="Recommandés" medias={movieReco || []} type="movies"/>
                </div>
            </div>
        </>
    )
}

export default Movie;
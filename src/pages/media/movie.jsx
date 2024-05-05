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

//Molecules
import MediaInfos from "../../components/molecules/mediainfos/mediainfos";

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
                    <MediaInfos data={movie} provider={movieProvider} type="movie"/>
                </div>
                {movieCast.length > 0 && (
                    <div className="Media__cast">
                        <CastSlider title="Casting" casting={movieCast} />
                    </div>
                )}
                {movieReco.length > 0 && (
                    <div className="Media__reco">
                        <MediaSlider title="Recommandés" medias={movieReco || []} type="movies" />
                    </div>
                )}
            </div>
        </>
    )
}

export default Movie;
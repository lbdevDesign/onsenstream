import React, { useState, useEffect } from "react";

//Data
import useMovieUpcomingData from "../../data/movieUpcoming";
import useMovieTrendingsData from "../../data/movieTrendings";
import useMovieTopData from "../../data/movieTop";
import useSerieTrendingsData from "../../data/serieTrendings";
import useSerieTopData from "../../data/serieTop";


//Organisms
import Header from "../../components/organisms/header/header";

//Molecules
import MediaListItem from "../../components/molecules/medialistitem/mediaListItem";
import { Link, useParams } from "react-router-dom";

function MediaList() {
    const { list } = useParams();
    const [mediaList, setMediaList] = useState([]);

    const MovieUpcomingFetch = () => useMovieUpcomingData();
    const MovieTrendingsFetch = () => useMovieTrendingsData();
    const MovieTopFetch = () => useMovieTopData();
    const SerieTrendingsFetch = () => useSerieTrendingsData();
    const SerieTopFetch = () => useSerieTopData();

    let mediaListData;
    let type;
    if (list === "upcomingmovies") {
        mediaListData = MovieUpcomingFetch();
        type = "movie";
    } else if (list === "trendingmovies") {
        mediaListData = MovieTrendingsFetch();
        type = "movie";
    } else if (list === "topmovies") {
        mediaListData = MovieTopFetch();
        type = "movie";
    } else if (list === "trendingseries") {
        mediaListData = SerieTrendingsFetch();
        type = "serie";
    } else if (list === "topseries") {
        mediaListData = SerieTopFetch();
        type = "serie";
    } else {
        mediaListData = [];
        type = "";
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setMediaList(mediaListData)
    }, [mediaListData])

    let pageTitle;
    if (list === "upcomingmovies") {
        pageTitle = "Films du moment";
    } else if (list === "trendingmovies") {
        pageTitle = "Films populaires";
    } else if (list === "topmovies") {
        pageTitle = "Films les mieux notés";
    } else if (list === "trendingseries") {
        pageTitle = "Séries poplaires";
    } else if (list === "topseries") {
        pageTitle = "Séries les mieux notées";
    } else {
        pageTitle = "";
    }

    
    return(
        <>
            <Header />
            <div className="Medialist">
                <div className="Medialist__backdrop">
                    <div className="Medialist__backdrop__fadeOSS"></div>
                </div>
                <div className="Medialist__title">
                    <h1 className="Medialist__title--title">{pageTitle}</h1>
                </div>
                <div className="Medialist__results">
                    {mediaList.map((item) => (
                        <Link key={item.id}>
                            <MediaListItem data={item} type={type}/>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MediaList;
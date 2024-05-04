import React, { useEffect, useState } from "react";

//Data
import useAllTrendingsData from "../../data/allTrendings"
import useMovieTrendingsData from "../../data/movieTrendings";
import useMovieTopData from "../../data/movieTop";
import useMovieUpcomingData from "../../data/movieUpcoming";
import useSerieTrendingsData from "../../data/serieTrendings";
import useSerieTopData from "../../data/serieTop";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";
import GenreSlider from "../../components/organisms/genreslider/genreSlider";
import MediaSlider from "../../components/organisms/mediaSlider/mediaSlider";

function App() {
  //All
  const [trending, setTrending] = useState([]);
  const trendingsData = useAllTrendingsData();

  //Films
  const [upcomingMovies, setUpcomingMoies] = useState([]);
  const upcomingMovieData = useMovieUpcomingData();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const trendingMoviesData = useMovieTrendingsData();
  const [topMovies, setTopMovies] = useState([]);
  const topMovieData = useMovieTopData();

  //Séries
  const [trendingSeries, setTreningSeries] = useState([]);
  const trendingSeriesData = useSerieTrendingsData();
  const [topSeries, setTopSeries] = useState([]);
  const topSeriesData = useSerieTopData();


  useEffect(() => {
    setTrending(trendingsData);
    setUpcomingMoies(upcomingMovieData);
    setTrendingMovies(trendingMoviesData);
    setTopMovies(topMovieData);
    setTreningSeries(trendingSeriesData);
    setTopSeries(topSeriesData);
  }, [trendingsData, upcomingMovieData, trendingMoviesData, topMovieData, trendingSeriesData, topSeriesData])

  trending.sort((a, b) => b.popularity - a.popularity);
  const top5Trendings = trending.slice(0, 5);

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App__hero">
        <HeroCarousel trend={top5Trendings}/>
      </div>
      {/* <div className="App__switch">
        <SwitchButton />
      </div> */}
      <div className="App__movies">
        <GenreSlider title="Top films par genres" />
        <MediaSlider title='Films du moment' medias={upcomingMovies || []} type="movies" cta="true"/>
        <MediaSlider title='Séries populaires' medias={trendingSeries || []} type="series" cta="true"/>
        <MediaSlider title='Films populaires' medias={trendingMovies || []} type="movies" cta="true"/>
        <MediaSlider title='Séries les mieux notées' medias={topSeries || []} type="series" cta="true"/>
        <MediaSlider title='Films les mieux notés' medias={topMovies || []} type="movies" cta="true"/>
      </div>
    </div>
  );
}

export default App;

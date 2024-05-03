import React, { useEffect, useState } from "react";

//Data
import useAllTrendingsData from "../../data/allTrendings"
import useMovieTrendingsData from "../../data/movieTrendings";
import useMovieTopData from "../../data/movieTop";
import useMovieUpcomingData from "../../data/movieUpcoming";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";
import GenreSlider from "../../components/organisms/genreslider/genreSlider";
import MovieSlider from "../../components/organisms/movieSlider/movieSlider";


function App() {
  const [trending, setTrending] = useState([]);
  const trendingsData = useAllTrendingsData();
  const [upcomingMovies, setUpcomingMoies] = useState([]);
  const upcomingMovieData = useMovieUpcomingData();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const trendingMoviesData = useMovieTrendingsData();
  const [topMovies, setTopMovies] = useState([]);
  const topMovieData = useMovieTopData();

  useEffect(() => {
    setTrending(trendingsData);
    setUpcomingMoies(upcomingMovieData);
    setTrendingMovies(trendingMoviesData);
    setTopMovies(topMovieData);
  }, [trendingsData, upcomingMovieData, trendingMoviesData, topMovieData])

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
        <GenreSlider title="Top par genres" />
        <MovieSlider title='En ce moment' movies={upcomingMovies || []}/>
        <MovieSlider title='Populaires' movies={trendingMovies || []} />
        <MovieSlider title='Les mieux notés' movies={topMovies || []}/>
      </div>
    </div>
  );
}

export default App;

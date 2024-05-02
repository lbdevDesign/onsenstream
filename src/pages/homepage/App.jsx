import React, { useEffect, useState } from "react";

//Data
import useAllTrendingsData from "../../data/allTrendings"
import useMovieTrendingsData from "../../data/movieTrendings";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";
import GenreSlider from "../../components/organisms/genreslider/genreSlider";
import MovieSlider from "../../components/organisms/movieSlider/movieSlider";


function App() {
  const [trending, setTrending] = useState([]);
  const trendingsData = useAllTrendingsData();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const trendingMoviesData = useMovieTrendingsData();
  const [topMovies, setTopMovies] = useState([]);
  const [upcomingMovies, setUpcomingMoies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  process.env.REACT_APP_API_KEY
    }
  }

  useEffect(() => {
    setTrending(trendingsData);
    setTrendingMovies(trendingMoviesData);

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(response => setTopMovies(response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(response => setUpcomingMoies(response.results))
    .catch(err => console.error(err));
  }, [trendingsData, trendingMoviesData])

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
        <GenreSlider title="Par genres" />
        <MovieSlider title='En ce moment' movies={upcomingMovies || []}/>
        <MovieSlider title='Populaires' movies={trendingMovies || []} />
        <MovieSlider title='Les mieux notés' movies={topMovies || []}/>
      </div>
    </div>
  );
}

export default App;

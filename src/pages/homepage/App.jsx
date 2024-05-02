import React, { useEffect, useState } from "react";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";
import GenreSlider from "../../components/organisms/genreslider/genreSlider";
import MovieSlider from "../../components/organisms/movieSlider/movieSlider";


function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upcomingMovies, setUpcomingMoies] = useState([]);
  const [trending, setTrending] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  process.env.REACT_APP_API_KEY
    }
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/week?language=fr-FR', options)
    .then(response => response.json())
    .then(response => setTrending(response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/trending/movie/week?language=fr-FR', options)
    .then(response => response.json())
    .then(response => setPopularMovies(response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(response => setTopMovies(response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(response => setUpcomingMoies(response.results))
    .catch(err => console.error(err));

    
    fetch('https://api.themoviedb.org/3/watch/providers/movie?language=fr-FR&watch_region=fr', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }, [])

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
        <MovieSlider title='Populaires' movies={popularMovies || []} />
        <MovieSlider title='Les mieux notés' movies={topMovies || []}/>
      </div>
    </div>
  );
}

export default App;

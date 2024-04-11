import React from "react";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";
import MovieCarousel from "../../components/organisms/movieSlider/movieSlider";

//Data
import topMoviesData from '../../data/topMovies';
import newMoviesData from '../../data/newMovies';


function App() {

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App__hero">
        <HeroCarousel />
      </div>
      <div className="App__movies">
        <MovieCarousel title='Les mieux notés' movies={topMoviesData || []}/>
        <MovieCarousel title='Nouveautés' movies={newMoviesData || []} />
      </div>
    </div>
  );
}

export default App;

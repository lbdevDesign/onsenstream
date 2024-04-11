import React from "react";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";
import MovieSlider from "../../components/organisms/movieSlider/movieSlider";

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
        <MovieSlider title='Les mieux notés' movies={topMoviesData || []}/>
        <MovieSlider title='Nouveautés' movies={newMoviesData || []} />
      </div>
    </div>
  );
}

export default App;

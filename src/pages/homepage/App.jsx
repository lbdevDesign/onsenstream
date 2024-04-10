import React from "react";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";



function App() {

  return (
    <div className="App">
      <Header />
      <div className="hero">
        <HeroCarousel />
      </div>
    </div>
  );
}

export default App;

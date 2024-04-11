import React from "react";

//Organisms
import Header from "../../components/organisms/header/header";
import { HeroCarousel } from "../../components/organisms/heroCarousel/heroCarousel";



function App() {

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App__hero">
        <HeroCarousel />
      </div>
    </div>
  );
}

export default App;

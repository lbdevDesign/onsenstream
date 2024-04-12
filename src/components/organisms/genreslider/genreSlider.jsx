import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Data
import topMoviesData from "../../../data/topMovies";

//Molecules
import SliderNav from "../../molecules/sliderNav/sliderNav";
import GenreCard from "../../molecules/cards/genrecard/genreCard";

function GenreSlider({ title }) {

  const sliderRef = useRef(null);

  const settings = {
      dots: false,
      arrows: false,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
          {
              breakpoint: 2000,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 1460,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 1240,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              swipeToSlide: true
            }
          },
          {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true
              }
          }
        ]
  };   
  
  function handleDiscoverClick() {
    console.log("Je découvre la sélection");
  }

  return (
    <div className="genreSlider">
        <div className="genreSlider__header">
            <h2 className="genreSlider__header__title">{title}</h2>
            <SliderNav 
            onClickLeft={()=>sliderRef.current.slickPrev()} 
            onClickRight={()=>sliderRef.current.slickNext()}
            onClick={handleDiscoverClick}
            />
        </div>

        <Slider ref={sliderRef} className="genreSlider__inner" {...settings}>
            <GenreCard genre="horror" movies={topMoviesData}/>
            <GenreCard genre="action" movies={topMoviesData}/>
            <GenreCard genre="comic" movies={topMoviesData}/>
            <GenreCard genre="love" movies={topMoviesData}/>
            <GenreCard genre="aventure" movies={topMoviesData}/>
            <GenreCard genre="horror" movies={topMoviesData}/>
            <GenreCard genre="action" movies={topMoviesData}/>
            <GenreCard genre="comic" movies={topMoviesData}/>
            <GenreCard genre="love" movies={topMoviesData}/>
            <GenreCard genre="aventure" movies={topMoviesData}/>
        </Slider>
        
    </div>
  )
}

export default GenreSlider;


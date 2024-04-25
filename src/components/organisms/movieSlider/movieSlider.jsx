import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

//Molecules
import SliderNav from "../../molecules/sliderNav/sliderNav";
import MovieCard from "../../molecules/cards/moviecard/movieCard";

function MovieSlider({ title, movies }) {

  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)'
  })

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
                slidesToShow: 7.5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 1460,
              settings: {
                slidesToShow: 6.5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 1240,
              settings: {
                slidesToShow: 5.5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 4.5,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 1,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              swipeToSlide: true
            }
          },
          {
              breakpoint: 420,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }
          }
        ]
  };   
  
  function handleDiscoverClick() {
    console.log("Je découvre la sélection");
  }

  return (
    <div className="movieSlider">
      <div className="movieSlider__header">
        <h2 className="movieSlider__header__title">{title}</h2>
        {isDesktop && (
          <SliderNav 
            onClickLeft={()=>sliderRef.current.slickPrev()} 
            onClickRight={()=>sliderRef.current.slickNext()}
            onClick={handleDiscoverClick}
          />
        )}
      </div>

      <Slider ref={sliderRef} className="movieSlider__inner" {...settings}>
        {movies.map((item) => (
          <MovieCard key={item.id} {...item}/>
        ))}
      </Slider>
        
    </div>
  )
}

export default MovieSlider;


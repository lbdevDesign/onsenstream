import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

//Molecules
import SliderNav from "../../molecules/sliderNav/sliderNav";
import MovieCard from "../../molecules/cards/moviecard/movieCard";
import { Link } from "react-router-dom";

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
      initialSlide: 0, 
      responsive: [
          {
              breakpoint: 2000,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 2,
                initialSlide: 0, 
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 1460,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                initialSlide: 0, 
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 1240,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                initialSlide: 0, 
                infinite: true,
                dots: true
              }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 0, 
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 0, 
              infinite: true,
              swipeToSlide: true
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0, 
              infinite: true,
              swipeToSlide: true
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

      <div className="movieSlider__box">
        <div className="movieSlider__box__fade"></div>
        <Slider ref={sliderRef} className="movieSlider__box__inner" {...settings}>
          {movies.map((item) => (
            <Link to={`/movie/${item.id}`} key={item.id}>
              <MovieCard {...item}/>
            </Link>
          ))}
        </Slider>

      </div>
        
    </div>
  )
}

export default MovieSlider;


import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

//Molecules
import SliderNav from "../../molecules/sliderNav/sliderNav";
import GenreCard from "../../molecules/cards/genrecard/genreCard";

function GenreSlider({ title, movieGenres }) {

  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)'
  })

  const genreList = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Aventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comédie",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentaire",
    },
    {
      id: 18,
      name: "Drame",
    },
    {
      id: 14,
      name: "Fantaisie",
    },
    {
      id: 36,
      name: "Historique",
    },
    {
      id: 27,
      name: "Horreur",
    },
    {
      id: 10749,
      name: "Romantique",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Guerre",
    },
    {
      id: 37,
      name: "Western",
    },
  ]

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
            {isDesktop && (
              <SliderNav 
              onClickLeft={()=>sliderRef.current.slickPrev()} 
              onClickRight={()=>sliderRef.current.slickNext()}
              onClick={handleDiscoverClick}
              />
            )}
        </div>

        <Slider ref={sliderRef} className="genreSlider__inner" {...settings}>
          {genreList.map((item) => (
            <GenreCard key={item.id} genre={item.name} />
          ))}
        </Slider>
        
    </div>
  )
}

export default GenreSlider;


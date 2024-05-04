import React from "react";
import { Link } from "react-router-dom";

//Molecules
import GenreCard from "../../molecules/cards/genrecard/genreCard";

function GenreSlider({ title }) {

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

  return (
    <div className="genreSlider">
        <div className="genreSlider__header">
            <h2 className="genreSlider__header__title">{title}</h2>
        </div>

        <div className="genreSlider__box">
          <div className="genreSlider__box__fade"></div>
          <ul className="genreSlider__box__inner">
            {genreList.map((item) => (
              <li key={item.id}>
                <Link to="#">
                  <GenreCard  genre={item.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
    </div>
  )
}

export default GenreSlider;


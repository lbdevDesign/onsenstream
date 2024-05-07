import React from "react";

//Molecules
import CtaButton from "../../atoms/buttons/ctabutton/ctabutton";
import MediaCard from "../../molecules/cards/mediacard/mediaCard";
import { Link } from "react-router-dom";

function MediaSlider({ title, medias, type, cta }) {

  let mediaPath;
  if (type === "movies") {
    mediaPath = "/movie/"
  } else if (type === "series") {
    mediaPath = "/serie/"
  }

  return (
    <div className="mediaSlider">
      <div className="mediaSlider__header">
        <h2 className="mediaSlider__header__title">{title}</h2>
        {cta? (
          <Link to={`/medialist/${cta}`}>
            <CtaButton label={`Découvrir ${title}`}>Découvrir</CtaButton>
          </Link>
        ) : (<></>)}
      </div>

      <div className="mediaSlider__box">
        <div className="mediaSlider__box__fade"></div>
        <ul className="mediaSlider__box__inner">
          {medias.map((item) => (
            <li key={item.id}>
                <Link to={`${mediaPath}${item.id}`} >
                    <MediaCard {...item}/>
                </Link>
            </li>
          ))}
        </ul>

      </div>
        
    </div>
  )
}

export default MediaSlider;


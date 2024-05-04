import React from "react";

//Molecules
import CtaButton from "../../atoms/buttons/ctabutton/ctabutton";
import MediaCard from "../../molecules/cards/mediacard/mediaCard";
import { Link } from "react-router-dom";

function MediaSlider({ title, medias, type, cta }) {

  let mediaPath;
  if (type === "movies") {
    mediaPath = "/onsenstream/movie/"
  } else if (type === "series") {
    mediaPath = "/onsenstream/serie/"
  }

  return (
    <div className="mediaSlider">
      <div className="mediaSlider__header">
        <h2 className="mediaSlider__header__title">{title}</h2>
        {cta === "true" ? (
          <CtaButton>Découvrir</CtaButton>
        ) : (<></>)}
      </div>

      <div className="mediaSlider__box">
        <div className="mediaSlider__box__fade"></div>
        <ul className="mediaSlider__box__inner">
          {medias.map((item) => (
            <li key={item.id}>
                <Link onClick={() => {window.location.href=`${mediaPath}${item.id}`}}>
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


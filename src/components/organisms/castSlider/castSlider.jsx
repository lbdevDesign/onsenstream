import React from "react";
import { Link } from "react-router-dom";

//Molecules
import CastCard from "../../molecules/cards/castCard/castCard";

//Atoms
// import FuncButton from "../../atoms/buttons/functionalbutton/funcbutton";

function CastSlider({ title, casting }) {

    return (
        <div className="castslider">
          <div className="castslider__header">
            <h2 className="castslider__header__title">{title}</h2>
            {/* {isDesktop && (
              <div className="castslider__header__nav">
                <FuncButton variant="sm" onClick={()=>sliderRef.current.slickPrev()}>
                    <ArrowLeftIcon className="icons" alt="précédent"/>
                </FuncButton>
                <FuncButton variant="sm" onClick={()=>sliderRef.current.slickNext()}>
                    <ArrowRightIcon className="icons" alt="précédent"/>
                </FuncButton>
              </div>
            )} */}
          </div>
    
          <div className="castslider__box">
            <div className="castslider__box__fade"></div>
            <ul className="castslider__box__inner">
              {casting.map((item) => (
                <li key={item.id}>
                  <Link to={`/people/${item.id}`}>
                    <CastCard {...item}/>
                  </Link>
                </li>
              ))}
            </ul>
    
          </div>
            
        </div>
      )
    }
    
    export default CastSlider;
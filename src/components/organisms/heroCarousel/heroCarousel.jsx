import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive'

//Atoms
import CtaButton from '../../atoms/buttons/ctabutton/ctabutton';
import FuncButton from "../../atoms/buttons/functionalbutton/funcbutton";

//Molecules
import CarouselNav from '../../molecules/carouselnav/carouselnav';

//Data
import heroCarouselData from '../../../data/heroCarouselItems';

//Assets
import {HandThumbUpIcon} from '@heroicons/react/24/outline';
import {PlusIcon} from '@heroicons/react/24/outline';

export const HeroCarousel = ({ movies }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 8000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = movies.length - 1;
        } else if (newIndex >= movies.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    function handleDecouverteClick() {
        console.log("vers la page du film");
    };
     
    function handleLikeClick() {
        console.log("Like ajouté");
    };

    function handleAddClick() {
        console.log("Film ajouté à la watchlist");
    };

    return (
        <div {...handlers}
        className="heroCarousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
            <div className="heroCarousel__inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

                {movies.map((item) => (
                    <div key={item.id} className="heroCarousel__item" >
                        <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} className="heroCarousel__item__img" alt={item.title}/>
                        <div className="heroCarousel__item__img--overlay"></div>
                        <div className="heroCarousel__item__content">
                            <h2 className="heroCarousel__item__content--title">{item.title}</h2>
                            <p className="heroCarousel__item__content--description">{item.overview}</p>
                            <div className="heroCarousel__item__content__cta">
                                <CtaButton onClick={handleDecouverteClick}>Découvrir</CtaButton>
                                {/* <FuncButton onClick={handleAddClick}>
                                    <PlusIcon className="icons" alt="Ajouter" />
                                </FuncButton> */}
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <CarouselNav 
                currentIndex={activeIndex} 
                data={movies} 
                updateIndex={updateIndex}
            />
            {/* <div className="heroCarousel__index">
                {isDesktop && (
                    <FuncButton onClick={() => { updateIndex(activeIndex - 1) }}>
                        <ArrowLeftIcon className="icons" alt="Précédent" />
                    </FuncButton> 
                )}
                <div className="heroCarousel__index__indicator">
                    {heroCarouselData.map((item, index) => {
                        return (
                            <IndexButton 
                                key={item.id} 
                                onClick={() => { updateIndex(index)}} 
                                index={index} 
                                data={activeIndex}/>
                        )
                    })}
                </div>
                {isDesktop && (
                    <FuncButton onClick={() => { updateIndex(activeIndex + 1) }}>
                        <ArrowRightIcon className="icons" alt="Précédent" />
                    </FuncButton>
                )}
            </div> */}
        </div>
    )
};
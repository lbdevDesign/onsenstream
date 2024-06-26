import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

//Atoms
import CtaButton from '../../atoms/buttons/ctabutton/ctabutton';

//Molecules
import CarouselNav from '../../molecules/carouselnav/carouselnav';


export const HeroCarousel = ({ trend }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const preLoadImages = trend.map(item => new Image().src = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`);

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
            newIndex = trend.length - 1;
        } else if (newIndex >= trend.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    function handleDecouverteClick() {
        console.log("vers la page du film");
    };

    return (
        <div {...handlers}
        className="heroCarousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
            <div className="heroCarousel__inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

                {trend.map((item) => (
                    <div key={item.id} className="heroCarousel__item" >
                        <img className="heroCarousel__item__background" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={`background ${item.title}`} loading="lazy" />
                        <div className="heroCarousel__item__cadre" >
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="heroCarousel__item__cadre__img" alt={item.title}/>
                        </div>
                        <div className="heroCarousel__item__content">
                            <h2 className="heroCarousel__item__content--title">{item.title ? item.title : item.name}</h2>
                            <p className="heroCarousel__item__content--description">{item.overview}</p>
                            <div className="heroCarousel__item__content__cta">
                                <Link to={item.media_type === "movie" ? `/movie/${item.id}` : `/serie/${item.id}`}>
                                    <CtaButton onClick={handleDecouverteClick}>Découvrir</CtaButton>
                                </Link>
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
                data={trend} 
                updateIndex={updateIndex}
            />
        </div>
    )
};
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Data
import useSerieData from "../../data/serie";
import useSerieProvider from "../../data/serieProvider";
import useSerieCast from "../../data/serieCast";
import useSerieRecommendationsData from "../../data/serieRecommendations";

//Organism
import Header from "../../components/organisms/header/header";
import CastSlider from "../../components/organisms/castSlider/castSlider";
import MediaSlider from "../../components/organisms/mediaSlider/mediaSlider";

//atoms
import GenreTag from "../../components/atoms/tags/genretags/genreTag";
import ProviderTag from "../../components/atoms/tags/providertags/providerTag";

function Serie() {
    const { id } = useParams();
    const [serie, setSerie] = useState([]);
    const serieData = useSerieData(id);
    const [serieProvider, setSerieProvider] = useState([]);
    const serieProviderData = useSerieProvider(id);
    const [serieCast, setSerieCast] = useState([]);
    const serieCastData = useSerieCast(id);
    const [serieReco, setSerieReco] = useState([]);
    const serieRecoData = useSerieRecommendationsData(id);


    useEffect(() => {
        window.scrollTo(0, 0);
        setSerie(serieData);
        setSerieProvider(serieProviderData);
        setSerieCast(serieCastData);
        setSerieReco(serieRecoData);
    }, [serieData, serieProviderData, serieCastData, serieRecoData])    

    const backdropPath = `https://image.tmdb.org/t/p/w500${serie.backdrop_path}`;

    return(
        <>
            <Header />
            <div className="Serie">
                <div className="Serie__backdrop">
                    <div className="Serie__backdrop__fade"></div>
                    <img className="Serie__backdrop--img" src={backdropPath} alt={`backdrop ${serie.title}`} />
                </div>
                <div className="Serie__infos">
                    <div className="Serie__infos__poster" >
                        <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} className="Serie__infos__poster--img" alt={`${serie.title} poster`}/>
                    </div>
                    <div className="Serie__infos__details">
                        {serieProvider?.flatrate? (
                            <ProviderTag provider={serieProvider.flatrate[0]} />
                        ) : (
                            <></>
                        )}
                        <h1 className="Serie__infos__details__title">{serie.name}</h1>
                        <div className="Serie__infos__details__genres">
                            {serie.genres && serie.genres.map((item) => (
                                <GenreTag key={item.id} text={item.name} />
                            ))}
                        </div>
                        <div className="Serie__infos__details__infos">
                            <div className="Serie__infos__details__infos__field">
                                <p className="Serie__infos__details__infos--label">Dernière saison :</p>
                                <p className="Serie__infos__details__infos__param">{serie.last_air_date ? serie.last_air_date.slice(0, 4) : ""}</p>
                            </div>
                            <div className="Serie__infos__details__infos__field">
                                <p className="Serie__infos__details__infos--label">Saisons :</p>
                                <p className="Serie__infos__details__infos__param">{serie.number_of_seasons}</p>
                            </div>
                            <div className="Serie__infos__details__infos__field">
                                <p className="Serie__infos__details__infos--label">Note :</p>
                                <p className="Serie__infos__details__infos__param">{serie.vote_average}</p>
                                <p className="Serie__infos__details__infos__param--small">({serie.vote_count} votes)</p>
                            </div>
                        </div>
                        <div className="Serie__infos__details__description">
                            <p className="Serie__infos__details__description--label">Synopsis :</p>
                            <p className="Serie__infos__details__description--desc">{serie.overview}</p>
                        </div>

                    </div>
                </div>
                <div className="Serie__cast">
                    <CastSlider title="Casting" casting={serieCast}/>
                </div>
                <div className="Serie__reco">
                    <MediaSlider title="Recommandés" medias={serieReco || []} type="series"/>
                </div>
            </div>
        </>
    )
}

export default Serie;
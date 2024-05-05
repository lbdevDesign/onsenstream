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

//Molecules
import MediaInfos from "../../components/molecules/mediainfos/mediainfos";

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
            <div className="Media">
            {serie.backdrop_path ? (
                <div className="Media__backdrop">
                    <div className="Media__backdrop__fade"></div>
                    <img className="Media__backdrop--img" src={backdropPath} alt={`backdrop ${serie.title}`} />
                </div>
            ) : (
                <div className="Media__backdrop">
                    <div className="Serie__backdrop__fadeOSS"></div>
                </div>
            )}
                <MediaInfos data={serie} provider={serieProvider} />
                {serieCast.length > 0 && (
                    <div className="Media__cast">
                        <CastSlider title="Casting" casting={serieCast}/>
                    </div>
                )}
                {serieReco.length > 0 && (
                    <div className="Media__reco">
                        <MediaSlider title="Recommandés" medias={serieReco || []} type="series"/>
                    </div>
                )}
            </div>
        </>
    )
}

export default Serie;
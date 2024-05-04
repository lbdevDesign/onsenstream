import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";

//Data
import usePeopleData from "../../data/people";
import usePeopleMoviesCreditData from "../../data/peopleMoviesCredit";
import usePeopleSeriesCreditData from "../../data/peopleSerieCredit";

//Organism
import Header from "../../components/organisms/header/header";

//Molecule
import MediaSlider from "../../components/organisms/mediaSlider/mediaSlider";

function TopList() {
    const { id } = useParams();
    const [people, setPeople] = useState([]);
    const peopleData = usePeopleData(id);
    const [peopleMoviesCredit, setPeopleMoviesCredit] = useState([]);
    const peopleMoviesCreditData = usePeopleMoviesCreditData(id);
    const [peopleSeriesCredit, setPeopleSeriesCredit] = useState([]);
    const peopleSeriesCreditData = usePeopleSeriesCreditData(id);

    useEffect(() => {
        window.scrollTo(0, 0);
        setPeople(peopleData);
        setPeopleMoviesCredit(peopleMoviesCreditData);
        setPeopleSeriesCredit(peopleSeriesCreditData);
    }, [peopleData, peopleMoviesCreditData, peopleSeriesCreditData])

    console.log(people.biography);
    
    return (
        <>
            <Header />
            <div className="People">
                <div className="People__infos">
                    <div className="People__infos__profile" >
                        <img src={`https://image.tmdb.org/t/p/w500${people.profile_path}`} className="People__infos__profile--img" alt={`${people.name} poster`}/>
                        <div className="People__infos__profile__text">
                            <h1 className="People__infos__profile__text__title">{people.name}</h1>
                            <div className="People__infos__profile__text__infos">
                                <div className="People__infos__profile__infos__field">
                                    <p className="People__infos__profile__text__infos--label">Année de naissance :</p>
                                    <p className="People__infos__profile__text__infos__param">{ people.birthday ? people.birthday.slice(0, 4) : ""}</p>
                                </div>
                                <div className="People__infos__profile__text__infos__field">
                                    <p className="People__infos__profile__text__infos--label">Originaire de :</p>
                                    <p className="People__infos__profile__text__infos__param">{ people.place_of_birth ? people.place_of_birth : ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="People__infos__filmo">
                    <MediaSlider 
                        title="Films" 
                        medias={peopleMoviesCredit && peopleMoviesCredit.cast ? peopleMoviesCredit.cast.slice(0, 25).sort((a, b) => b.vote_average - a.vote_average) : []} 
                        type="movies" 
                    />
                    <MediaSlider 
                        title="Series" 
                        medias={peopleSeriesCredit && peopleSeriesCredit.cast ? peopleSeriesCredit.cast.slice(0, 25).sort((a, b) => b.vote_average - a.vote_average) : []} 
                        type="series" 
                    />
                </div>
            </div>
        </>
    )
}

export default TopList;
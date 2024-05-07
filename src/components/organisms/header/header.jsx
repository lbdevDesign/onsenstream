import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Data
import useMovieListData from "../../../data/movieList";
import useSerieListData from "../../../data/serieList";

//Organisms
import SearchResults from '../searchresults/searchResults';

//Molecules
import { Searchbar } from '../../molecules/searchbar/searchbar';

//Atoms
import CtaButton from '../../atoms/buttons/ctabutton/ctabutton';

//Assets
import osesLogo from '../../../assets/OSSLogo.svg';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

// import {UserIcon} from '@heroicons/react/24/outline';

function Header() {

    const [showSearchbar, setSearchbar] = useState(false);
    const [showSerchField, setShowSearchField] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");

    const movieData = useMovieListData(searchTerm);
    const serieData = useSerieListData(searchTerm);

    const [movieResults, setMovieResults] = useState([]);
    const [serieResults, setSerieResults] = useState([]);

    useEffect(() => {
        setMovieResults(movieData);
        setSerieResults(serieData);
    }, [movieData, serieData])
    
    function handleDisplay() {
        setSearchbar(true)
    }

    function handleClose() {
        setSearchbar(false)
        setShowSearchField(false);
    }

    const handleInputChange = (event) => {
        const searchInput = event.target.value;
        setShowSearchField(searchTerm.length >= 2);
        setSearchTerm(searchInput)
    };

    const movieResultsFiltered = movieResults.filter((item) => item.poster_path !== null && item.poster_path !== '');
    const serieResultsFiltered = serieResults.filter((item) => item.poster_path !== null && item.poster_path !== '');

    // function handleAccountClick() {
    //     console.log("J'accède à mon compte");
    // }

    return(
        <div className="header">

            <div className="header__top">
                <Link to={"/"}>
                    <img src={osesLogo} className='header__top__logo' alt="Logo On s'en stream" />
                </Link>
                <div className='header__top__cta'>
                    {!showSearchbar && (
                        <>
                            <div className='header__top__cta__search'>
                                <CtaButton variant="square"  onClick={handleDisplay} label="Rechercher">
                                    <MagnifyingGlassIcon className="icons" alt='Search' />
                                </CtaButton>
                            </div>
                            <div className='header__top__cta__searchbar'>
                                <Searchbar 
                                    placeholder='Film, genre, acteur...'
                                    onChange={handleInputChange}
                                    onClick={handleClose}
                                    icon={showSerchField ? "cross" : "glass"}
                                />
                            </div>
                            {/* <FuncButton onClick={handleAccountClick}>
                                <UserIcon className="icons" alt='Mon compte' />
                            </FuncButton> */}
                        </>
                    )}    
                </div>
            </div>

            {showSearchbar ? (
                <div className='header__top__cta__mobile__searchbar'>
                    <Searchbar 
                        placeholder='Film, genre, acteur...'
                        onChange={handleInputChange}
                        function={handleClose}
                        icon={showSerchField ? "cross" : "glass"}
                    />
                </div>
            ) : (
                <></>
            )}
            <div className={`header__searchfield${showSerchField?' active':null}`}>
                {((movieResults.length === 0) && (serieResults.length === 0)) ? (
                    <h2>Aucun Résultas</h2>
                ) : (
                    <div className='header__searchfield__results'>
                        <SearchResults movies={movieResultsFiltered} series={serieResultsFiltered} />
                    </div>
                )}
            </div> 

        </div>
    )
}

export default Header;
import React from "react";

//Organisms
import MediaSlider from "../../organisms/mediaSlider/mediaSlider";

function SearchResults({ movies, series, handleClose}) {
    return(
        <div className="Searchresults">
            {movies.length >= series.length ? (
                <>
                    <MediaSlider title="Films" medias={movies || []} type="movies" handleClose={handleClose} />
                    <MediaSlider title="Séries" medias={series || []} type="series" handleClose={handleClose}/>
                </>
            ) : (
                <>
                    <MediaSlider title="Séries" medias={series || []} type="series" handleClose={handleClose}/>
                    <MediaSlider title="Films" medias={movies || []} type="movies" handleClose={handleClose}/>
                </>
            )}
        </div>
    )
}

export default SearchResults;
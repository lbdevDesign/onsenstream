import React from "react";

//Organisms
import MediaSlider from "../../organisms/mediaSlider/mediaSlider";

function SearchResults({ movies, series, peoples}) {
    return(
        <div className="Searchresults">
            {movies.length >= series.length ? (
                <>
                    <MediaSlider title="Films" medias={movies || []} type="movies" />
                    <MediaSlider title="Séries" medias={series || []} type="series" />
                </>
            ) : (
                <>
                    <MediaSlider title="Séries" medias={series || []} type="series" />
                    <MediaSlider title="Films" medias={movies || []} type="movies" />
                </>
            )}
        </div>
    )
}

export default SearchResults;
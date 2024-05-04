import { useState, useEffect } from "react";

function useMovieRecommendationsData(param) {
  const [serieRecommendations, setSerieRecommendations] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${param}/recommendations?language=fr-FR&page=1`, options);
        const data = await response.json();
        setSerieRecommendations(data.results);
      } 
      fetchData();
  }, []);

  return serieRecommendations;
}

export default useMovieRecommendationsData;
import { useState, useEffect } from "react";

function useMovieProvider(param) {
  const [movieProvider, setMovieProvider] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${param}/watch/providers`, options);
        const data = await response.json();
        console.log(data);
        if (data.results && data.results.FR && data.results.FR.flatrate && data.results.FR.flatrate[0].logo_path) {
            setMovieProvider(data.results.FR.flatrate[0]);  // Only set if flatrate exists
          } else {
            setMovieProvider(null); 
          }
      } 
      fetchData();
  }, []);

  return movieProvider;
}

export default useMovieProvider;
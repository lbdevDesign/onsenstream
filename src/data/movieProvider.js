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
        if (data.results && data.results.FR) {
            setMovieProvider(data.results.FR);  // Only set if flatrate exists
          } else {
            setMovieProvider(null); 
          }
      } 
      fetchData();
  }, [param]);

  return movieProvider;
}

export default useMovieProvider;
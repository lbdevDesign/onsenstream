import { useState, useEffect } from "react";

function useMovieData(param) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${param}?language=fr-FR`, options);
        const data = await response.json();
        setMovieData(data);
      } 
      fetchData();
  }, []);

  return movieData;
}

export default useMovieData;
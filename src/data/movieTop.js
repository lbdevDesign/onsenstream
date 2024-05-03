import { useState, useEffect } from "react";

function useMovieTopData() {
  const [movieTop, setMovieTop] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options);
        const data = await response.json();
        setMovieTop(data.results);
      } 
      fetchData();
  }, []);

  return movieTop;
}

export default useMovieTopData;
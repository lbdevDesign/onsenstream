import { useState, useEffect } from "react";

function useMovieUpcomingData() {
  const [movieUpcoming, setMovieUpcoming] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1', options);
        const data = await response.json();
        setMovieUpcoming(data.results);
      } 
      fetchData();
  }, []);

  return movieUpcoming;
}

export default useMovieUpcomingData;
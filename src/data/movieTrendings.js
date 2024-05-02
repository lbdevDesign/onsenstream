import { useState, useEffect } from "react";

function useMovieTrendingsData() {
  const [movieTrendings, setMovieTrendings] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/week?language=fr-FR', options);
        const data = await response.json();
        setMovieTrendings(data.results);
      } 
      fetchData();
  }, []);

  return movieTrendings;
}

export default useMovieTrendingsData;
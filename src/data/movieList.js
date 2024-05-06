import { useState, useEffect } from "react";

function useMovieListData(param) {
  const [movieListData, setMovieListData] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${param}&include_adult=false&language=fr-FR&page=1`, options);
        const data = await response.json();
        setMovieListData(data.results);
      } 
      fetchData();
  }, [param]);

  return movieListData;
}

export default useMovieListData;
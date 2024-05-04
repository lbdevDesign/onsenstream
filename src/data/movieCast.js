import { useState, useEffect } from "react";

function useMovieCast(param) {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${param}/credits?language=fr-FR`, options);
        const data = await response.json();
        if (data && data.cast) {
          setMovieCast(data.cast.filter(cast => cast.profile_path).slice(0, 20));
        } else {
          setMovieCast(null);
        }
      } 
      fetchData();
  }, []);

  return movieCast;
}

export default useMovieCast;
import { useState, useEffect } from "react";

function useSerieCast(param) {
  const [serieCast, setSerieCast] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${param}/credits?language=fr-FR`, options);
        const data = await response.json();
        setSerieCast(data.cast.filter(cast => cast.profile_path).slice(0, 20));
      } 
      fetchData();
  }, []);

  return serieCast;
}

export default useSerieCast;
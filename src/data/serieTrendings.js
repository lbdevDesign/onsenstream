import { useState, useEffect } from "react";

function useSerieTrendingsData() {
  const [serieTrendings, setSerieTrendings] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=fr-FR', options);
        const data = await response.json();
        setSerieTrendings(data.results);
      } 
      fetchData();
  }, []);

  return serieTrendings;
}

export default useSerieTrendingsData;
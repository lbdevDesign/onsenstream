import { useState, useEffect } from "react";

function useSerieTopData() {
  const [serieTop, setSerieTop] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=1', options);
        const data = await response.json();
        setSerieTop(data.results);
      } 
      fetchData();
  }, []);

  return serieTop;
}

export default useSerieTopData;
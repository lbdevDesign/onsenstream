import { useState, useEffect } from "react";

function useSerieProvider(param) {
  const [serieProvider, setSerieProvider] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${param}/watch/providers`, options);
        const data = await response.json();
        if (data.results && data.results.FR) {
            setSerieProvider(data.results.FR);  // Only set if flatrate exists
          } else {
            setSerieProvider(null); 
          }
      } 
      fetchData();
  }, []);

  return serieProvider;
}

export default useSerieProvider;
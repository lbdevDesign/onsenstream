import { useState, useEffect } from "react";

function useAllTrendingsData() {
  const [allTrendings, setAllTrendings] = useState([]);

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
        setAllTrendings(data.results);
      } 
      fetchData();
  }, []);

  return allTrendings;
}

export default useAllTrendingsData;
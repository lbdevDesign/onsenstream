import { useState, useEffect } from "react";

function usePeopleMoviesCreditData(param) {
  const [peopleMoviesCredit, setPeopleMoviesCredit] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/person/${param}/movie_credits?language=fr-FR`, options);
        const data = await response.json();
        setPeopleMoviesCredit(data);
        console.log(data);
      } 
      fetchData();
  }, [param]);

  return peopleMoviesCredit;
}

export default usePeopleMoviesCreditData;
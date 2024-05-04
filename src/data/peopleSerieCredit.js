import { useState, useEffect } from "react";

function usePeopleSeriesCreditData(param) {
  const [peopleSeriesCredit, setPeopleSeriesCredit] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/person/${param}/tv_credits?language=fr-FR`, options);
        const data = await response.json();
        setPeopleSeriesCredit(data);
        console.log(data);
      } 
      fetchData();
  }, [param]);

  return peopleSeriesCredit;
}

export default usePeopleSeriesCreditData;
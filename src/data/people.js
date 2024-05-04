import { useState, useEffect } from "react";

function usePeopleData(param) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      }

      const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/person/${param}?language=fr-FR`, options);
        const data = await response.json();
        setPeople(data);
      } 
      fetchData();
  }, [param]);

  return people;
}

export default usePeopleData;
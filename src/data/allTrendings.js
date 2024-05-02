import { useState, useEffect } from "react";

function useAllTrendingsData() {
  const [allTrendings, setAllTrendings] = useState([]);

  useEffect(() => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGUyN2JkNzEwNzZiZmEyNGUyNzRmYTBlMjYwMmNkZSIsInN1YiI6IjY1ZmIwMmE1NWJlMDBlMDE3YzZlNzc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uobQko1bJFBY3XyqYAWmJ5Fs-CJPMpqqjU7l9ZSnS6w'
        }
      }

    fetch('https://api.themoviedb.org/3/genre/movie/list', options)
    .then(response => response.json())
    .then(response => setAllTrendings(response.results))
    .catch(err => console.error(err));
  }, []);

  return allTrendings;
}

export default useAllTrendingsData;
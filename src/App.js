import React, { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./components/Movies";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const {
    //   data: {
    //     data: { fetchedMovies },
    //   },
    // } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    // setMovies({ fetchedMovies });
    const fetchedMovies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(fetchedMovies.data.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "isLoading" : <Movies movies={movies} />}</div>;
};

export default App;

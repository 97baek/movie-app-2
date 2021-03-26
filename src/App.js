import "./App.css";
import { useState, useEffect } from "react";
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

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader-text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          <Movies movies={movies} />
        </div>
      )}
    </section>
  );
};

export default App;

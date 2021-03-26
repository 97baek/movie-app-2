import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  console.log(movies);
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      ))}
    </>
  );
};

export default Movies;

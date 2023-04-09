import Header from "../Header";
import movies from "../../data/movie.json";
import MovieCard from "./MovieCard";

import "../styles/Movie.css";

const Movie = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="movies">
        {movies.map((item) => (
          <MovieCard
            movieId={item.imdbID}
            poster={item.Poster}
            title={item.Title}
            year={item.Year}
          />
        ))}
      </div>
    </>
  );
};

export default Movie;

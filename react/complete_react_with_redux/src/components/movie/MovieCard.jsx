import "../styles/MovieCard.css";

const MovieCard = ({ movieId, poster, title, year }) => {
  return (
    <div className="movieCard">
      <img src={poster} alt={movieId} />
      <p>Title : {title}</p>
      <p>Release : {year}</p>
    </div>
  );
};

export default MovieCard;

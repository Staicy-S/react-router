import { useParams } from "react-router-dom"; //useParams ist ein hook
import { movies } from "../data/movies";
// import { actors } from "../data/actors";

export function MovieDetails() {
  const { movieId } = useParams();

  // const filteredMovies = movies.filter((movie) => {
  //   return movie.id == movieId;
  // });
  const movie = movies.find((movie) => movie.id == movieId); //hier waren movie.id == movieId vorher in geschweiften Klammern mit einem return vor dem

  // console.log(findMovie); gibt ein Objekt aus
  if (!movie) {
    return (
      <>
        <h2>Movie Details</h2>
        <p>Es gibt keine Infos zu deinem gesuchten Film! 🎥</p>
      </>
    );
  }
  console.log(movie);
  return (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.tagline}</p>
      <img
        className="movie-image"
        src={movie.image}
        alt={"movie image of " + movie.title}
      />
      <img src="" alt="" />
      <ul>
        {movie.cast.map((item) => (
          <li key={item.id}>{item.character}</li>
        ))}
      </ul>
    </>
  );
}

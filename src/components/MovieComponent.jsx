import "../App.css";
import "../data/movies";
// import { actors } from "../data/actors";
import { movies } from "../data/movies";

export function MovieComponent() {
  return (
    <>
      {movies.map((movie) => {
        return (
          <section key={movie.id} className="movie-introduction">
            <h3>{movie.title}</h3>
            <h4>{movie.tagline}</h4>
            <img
              className="movie-image"
              src={movie.image}
              alt={"movie image of " + movie.title}
            />{" "}
          </section>
        );
      })}
    </>
  );
}

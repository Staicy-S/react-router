import "../App.css";
import "../data/movies";
// import { actors } from "../data/actors";
import { movies } from "../data/movies";
import { Link } from "react-router-dom";

export function MovieComponent() {
  return (
    <>
      {movies.map((movie) => {
        return (
          <section key={movie.id} className="movie-introduction">
            <h3>{movie.title}</h3>
            <h4>{movie.tagline}</h4>
            <Link to={"/movies/" + movie.id}>
              <img
                className="movie-thumbnail"
                src={movie.thumbnail}
                alt={"movie image of " + movie.title}
              />{" "}
            </Link>
          </section>
        );
      })}
    </>
  );
}

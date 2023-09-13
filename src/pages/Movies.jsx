import { Link } from "react-router-dom";
import "../App.css";
import "../data/movies";
import { MovieComponent } from "../components/MovieComponent";

export function Movies() {
  return (
    <>
      <h2>Best Movies</h2>
      <MovieComponent />
      <Link className="links" to="/Actors">
        Go to Actors
      </Link>
      <Link className="links" to="/">
        Go to Home
      </Link>
    </>
  );
}

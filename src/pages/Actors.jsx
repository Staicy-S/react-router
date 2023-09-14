import { Link } from "react-router-dom";
import "../App.css";
import { ActorsComponent } from "../components/ActorsComponent";

export function Actors() {
  return (
    <>
      <h2>Best Actors and Actresses</h2>
      <ActorsComponent />
      <Link className="links" to="/movies">
        Go to Movies
      </Link>
      <Link className="links" to="/">
        Go to Home
      </Link>
    </>
  );
}

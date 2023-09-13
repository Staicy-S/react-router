import { Link } from "react-router-dom";
import "../App.css";

export function Actors() {
  return (
    <>
      <h2>Best Actors and Actresses</h2>
      <p>My favorite actresses are</p>
      <ul>
        <li>Emma Watson</li>
        <li>Emilia Clarke</li>
      </ul>
      <Link className="links" to="/Movies">
        Go to Movies
      </Link>
      <Link className="links" to="/">
        Go to Home
      </Link>
    </>
  );
}

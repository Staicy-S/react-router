import { Link } from "react-router-dom";
import "../App.css";

export function Homepage() {
  return (
    <>
      <h2>Welcome!</h2>
      <Link className="links" to="/Movies">
        Go to Movies
      </Link>
      <Link className="links" to="/Actors">
        Go to Actors
      </Link>
    </>
  );
}

import { Link } from "react-router-dom";
import "../App.css";

export function Homepage() {
  return (
    <>
      <h2>Welcome!</h2>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          possimus odio incidunt nulla fugit, labore sunt earum nemo, repellat
          commodi ab alias maiores corporis numquam. Cum, officia consequatur.
          Assumenda, tempore?
        </p>
      </section>
      <Link className="links" to="/Movies">
        Go to Movies
      </Link>
      <Link className="links" to="/Actors">
        Go to Actors
      </Link>
    </>
  );
}

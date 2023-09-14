import "../App.css";
import "../data/movies";
import { actors } from "../data/actors";
// import { movies } from "../data/movies";
import { Link } from "react-router-dom";

export function ActorsComponent() {
  return (
    <>
      {actors.map((actor) => {
        return (
          <section key={actor.id} className="actor-introduction">
            <div className="actor-details">
              <h3>
                {actor.name} as {actor.character}
              </h3>
              <Link to={"/actors/" + actor.id}>
                <img
                  className="actor-image"
                  src={actor.image}
                  alt={"actor image of " + actor.name}
                />{" "}
              </Link>
            </div>
          </section>
        );
      })}
    </>
  );
}

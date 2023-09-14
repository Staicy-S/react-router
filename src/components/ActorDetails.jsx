import { useParams } from "react-router-dom"; //useParams ist ein hook
import { actors } from "../data/actors";

export function ActorDetails() {
  const { actorId } = useParams();
  const actor = actors.find((actor) => actor.id == actorId);
  if (!actor) {
    return (
      <>
        <h2>Actor Details</h2>
        <p>Es gibt keine Infos zu deinem gesuchten Schauspieler! 🎥</p>
      </>
    );
  }
  return (
    <>
      <h2>{actor.name}</h2>
      <p>Starring as {actor.character}</p>
    </>
  );
}

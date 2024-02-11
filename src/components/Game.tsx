import { Link } from "react-router-dom";

export const Game = ({ game }: { game: any }) => {
  return (
    <div className="game">
      <img src={game.thumbnail} alt="" />
      <Link to={`/game/${game.id}`}>{game.title}</Link>
    </div>
  );
};

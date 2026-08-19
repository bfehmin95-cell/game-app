import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import "./GameCard.css";

function GameCard({ game, onSelectGame }) {
  const handleCardClick = () => {
    if (onSelectGame) {
      onSelectGame(game);
    } else {
      console.log("Card clicked:", game);
    }
  };

  return (
    <div className="game-card">
      <img
        src={game?.image}
        alt={game?.name || "Game thumbnail"}
        onClick={handleCardClick}
      />

      <div className="game-info">
        <div>
          <h3>{game?.name}</h3>
          <p>{game?.category}</p>
        </div>

        <div className="game-stats">
          <span>
            <FaStar />
            {game?.rating || "4.8"}
          </span>

          <span>
            <FaDownload />
            {game?.downloads || "2.3M"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
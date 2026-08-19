import React, { useEffect } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import GameCard from "./GameCard";

import { fetchGames } from "../features/games/gamesSlice";

import "./PopularGames.css";

function PopularGames() {

  const dispatch = useDispatch();

  const {
    games,
    loading,
    error,
    searchTerm,
  } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);


  const filteredGames = games.filter((game) => {

    const search = searchTerm.toLowerCase();

    return (
      game.name.toLowerCase().includes(search) ||
      game.category.toLowerCase().includes(search)
    );

  });


  if (loading) {
    return (
      <section className="popular-section">

        <h2>
          <span>Most Popular</span>{" "}
          <strong>Right Now</strong>
        </h2>

        <div className="loading">
          Oyunlar yüklənir...
        </div>

      </section>
    );
  }


  if (error) {
    return (
      <section className="popular-section">

        <h2>
          <span>Most Popular</span>{" "}
          <strong>Right Now</strong>
        </h2>

        <div className="error">
          {error}
        </div>

      </section>
    );
  }


  return (
    <section className="popular-section">

      <h2>
        <span>Most Popular</span>{" "}
        <strong>Right Now</strong>
      </h2>

      <div className="games-grid">

        {filteredGames.length > 0 ? (

          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))

        ) : (

          <div className="no-games">
            Oyun tapılmadı 😔
          </div>

        )}

      </div>

      <button className="pink-button">
        Discover Popular
      </button>

    </section>
  );
}

export default PopularGames;
import React from "react";
import "./GamingLibrary.css";

const library = [
  {
    name: "Dota 2",
    category: "Sandbox",
    date: "24/08/2036",
    hours: "634 H 22 Min",
  },
  {
    name: "Fortnite",
    category: "Sandbox",
    date: "22/08/2036",
    hours: "740 H 52 Min",
  },
  {
    name: "CS-GO",
    category: "Sandbox",
    date: "21/08/2036",
    hours: "802 H 14 Min",
  },
];

const images = [
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=200&q=80",
];

function GamingLibrary() {
  return (
    <section className="library-section">

      <h2>
        <span>Your Gaming</span> Library
      </h2>

      <div className="library-header">
        <span>Game</span>
        <span>Date Added</span>
        <span>Hours Played</span>
        <span>Currently</span>
        <span></span>
      </div>

      {library.map((game, index) => (
        <div className="library-row" key={game.name}>

          <div className="library-game">

            <img
              src={images[index]}
              alt={game.name}
            />

            <div>
              <h3>{game.name}</h3>
              <p>{game.category}</p>
            </div>

          </div>

          <div className="library-data">
            <strong>Date Added</strong>
            <span>{game.date}</span>
          </div>

          <div className="library-data">
            <strong>Hours Played</strong>
            <span>{game.hours}</span>
          </div>

          <div className="library-data">
            <strong>Currently</strong>
            <span>Downloaded</span>
          </div>

          <button className="download-button">
            Downloaded
          </button>

        </div>
      ))}

      <button className="pink-button">
        View Your Library
      </button>

    </section>
  );
}

export default GamingLibrary;
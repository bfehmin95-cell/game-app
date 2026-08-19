import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularGames from "./components/PopularGames";
import GamingLibrary from "./components/GamingLibrary";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="container">

        <Hero />

        <PopularGames />

        <GamingLibrary />

      </main>

      <Footer />

    </div>
  );
}

export default App;

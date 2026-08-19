import React from "react";
import { FaGamepad, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { setSearchTerm } from "../features/games/gamesSlice";

import "./Navbar.css";

function Navbar() {

    const dispatch = useDispatch();

    const searchTerm = useSelector(
        (state) => state.games.searchTerm
    );

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <header className="navbar">

            <div className="navbar-logo">
                <FaGamepad />
                <span>CYBORG</span>
            </div>

            <div className="navbar-search">

                <FaSearch />

                <input
                    type="text"
                    placeholder="Type Something"
                    value={searchTerm}
                    onChange={handleSearch}
                />

            </div>

            <nav className="navbar-links">

                <a href="/" className="active">Home</a>
                <a href="#browse">Browse</a>
                <a href="#details">Details</a>
                <a href="#streams">Streams</a>
                <a href="#profile">Profile</a>

            </nav>


            <div className="navbar-profile">
                F
            </div>

        </header>
    );
}

export default Navbar;
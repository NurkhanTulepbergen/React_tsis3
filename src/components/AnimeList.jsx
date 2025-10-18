import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import "./AnimeList.css";

export default function AnimeList() {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchAnime = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.jikan.moe/v4/top/anime");
            const data = await response.json();
            if (Array.isArray(data.data)) {
                setAnimeList(data.data);
            } else {
                setAnimeList([]);
            }
        } catch (error) {
            console.error("Error fetching anime:", error);
            setAnimeList([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log("AnimeList component mounted");
    }, []);

    const filteredAnime = animeList.filter(
        (anime) =>
            anime &&
            anime.title &&
            anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleClear = () => {
        setSearchTerm("");
    };

    return (
        <div className="anime-list-container">
            <h2>Top Anime</h2>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search anime by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                {searchTerm && (
                    <button onClick={handleClear} className="clear-button">
                        ✖
                    </button>
                )}
            </div>

            <button onClick={fetchAnime} className="load-button">
                {loading ? "Loading..." : "Load Anime"}
            </button>

            <ul className="anime-list">
                {filteredAnime
                    .filter((anime) => anime && anime.images && anime.images.jpg)
                    .map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
            </ul>
        </div>
    );
}

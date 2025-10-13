import React from "react";
import "./AnimeCard.css";

export default function AnimeCard({ anime }) {
    const fallbackImage = "https://via.placeholder.com/200x300?text=No+Image";

    // если данных нет — не рендерим
    if (!anime || !anime.images || !anime.images.jpg) return null;

    return (
        <li className="anime-card">
            <img
                src={anime.images.jpg.image_url || fallbackImage}
                alt={anime.title || "Anime"}
                className="anime-image"
            />
            <div className="anime-info">
                <h3>{anime.title || "Untitled"}</h3>
                <p>Type: {anime.type || "N/A"}</p>
                <p>Episodes: {anime.episodes ?? "?"}</p>
                <p>Score: ⭐ {anime.score ?? "N/A"}</p>
                <p>Year: {anime.year ?? "Unknown"}</p>
            </div>
        </li>
    );
}

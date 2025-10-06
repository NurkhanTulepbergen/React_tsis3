import React from "react";
import "./CharacterCard.css";

export default function CharacterCard({ character }) {
    return (
        <li className="character-card">
            <img src={character.image} alt={character.name} />
            <div className="character-info">
                <h3>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
            </div>
        </li>
    );
}
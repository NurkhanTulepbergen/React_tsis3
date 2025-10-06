import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import "./CharacterList.css"

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCharacters = async () => {
        setLoading(true);
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
    };

    return (
        <div className = "character-list-container">
            <h2>Rick and Morty Characters</h2>
            <button onClick={fetchCharacters} className = "load-button">
                {loading ? "Loading..." : "Load Characters"}
            </button>

            <ul className="character-list">
                {characters.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                ))
                }
            </ul>
        </div>
    );
}
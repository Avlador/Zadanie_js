import type { Character } from "../../types/character";

interface CharacterCardProps {
    character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
    return (
        <article className="character-card">
            <img
                src={character.image}
                alt={character.name}
                className="character-card-image"
            />
            <div className="card-info">
                <h3 className="character-name">{character.name}</h3>
                <p className="card-detail">
                    <span className="card-detail-label">Actor: </span>
                    {character.actor}
                </p>
                <p className="card-detail">
                    <span className="card-detail-label">Gender: </span>
                    {character.gender}
                </p>
                <p className="card-detail">
                    <span className="card-detail-label">House: </span>
                    {character.house}
                </p>
                <p className="card-detail">
                    <span className="card-detail-label">Wand core: </span>
                    {character.wandCore}
                </p>
                <p className="card-detail">
                    <span className="card-detail-label">Alive: </span>
                    {character.alive}
                </p>
            </div>
        </article>
    );
}

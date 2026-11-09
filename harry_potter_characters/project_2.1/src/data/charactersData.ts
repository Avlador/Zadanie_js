import type { Character } from "../types/character";
import hermioneImage from '../image/hermione.jpg';
import dracoImage from '../image/draco.jpg';

export const characterData: Character[] = [
    {
        id: '1',
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        gender: 'female',
        house: 'Gryffindor',
        wandCore: 'dragon heartstring',
        alive: 'yes',
        image: hermioneImage,
    },
    {
        id: '2',
        name: 'Draco Malfoy',
        actor: 'Tom Felton',
        gender: 'male',
        house: 'Slytherin',
        wandCore: 'unicorn tail-hair',
        alive: 'yes',
        image: dracoImage,
    },
    {
        id: '3',
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        gender: 'female',
        house: 'Gryffindor',
        wandCore: 'dragon heartstring',
        alive: 'yes',
        image: hermioneImage,
    }
];

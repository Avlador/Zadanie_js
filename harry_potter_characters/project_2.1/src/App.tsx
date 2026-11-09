import { useState, useMemo } from 'react';
import { Header } from './components/Header/Header';
import { CharacterCard } from './components/CharacterCard/CharacterCard';
import { characterData } from './data/charactersData';
import './App.css';

function App() {
  const [nameFilter, setNameFilter] = useState('');
  const [schoolFilter, setSchoolFilter] = useState('');

  const filteredCharacters = useMemo(() => {
    return characterData.filter((char) => {
      const matchesName = char.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase().trim());
      const matchesSchool =
        !schoolFilter || char.house.toLowerCase() === schoolFilter.toLowerCase();

      return matchesName && matchesSchool;
    });
  }, [nameFilter, schoolFilter]);

  return (
    <div className="app-container">
      <Header
        nameFilter={nameFilter}
        onNameFilterChange={setNameFilter}
        schoolFilter={schoolFilter}
        onSchoolFilterChange={setSchoolFilter}
      />
      <main className="card-grid">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p className="no-characters">No characters found matching the criteria.</p>
        )}
      </main>
    </div>
  );
}

export default App;

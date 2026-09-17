import React from 'react';
import './App.css'; 

interface EmojiCardProps {
  symbol: string;
  title: string;
  keywords: string;
}

export function Header() {
  return (
    <header className="header-section">
      <h1>Emoji Finder</h1>
      <h2>Find emoji by keywords</h2>
    </header>
  );
}


export function SearchInput() {
  return (
    <div className="search-container">
      <input className="search-input" type="text" placeholder="Placeholder" />
    </div>
  );
}


export function EmojiCard({ symbol, title, keywords }: EmojiCardProps) {
  return (
    <div className="card">
      <div className="card-emoji">{symbol}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-keywords">{keywords}</p>
    </div>
  );
}

export function CardsContainer() {

  const emojisData = [
    {
      id: 1,
      symbol: "💯",
      title: "100",
      keywords: "Hundred, points, symbol, wow, win, perfect, parties"
    },
    {
      id: 2,
      symbol: "🔢",
      title: "1234",
      keywords: "input symbol for numbers symbol"
    },
    {
      id: 3,
      symbol: "🔢",
      title: "1234",
      keywords: "input symbol for numbers symbol"
    }
  ];

  return (
    <main className="main-content">
      <div className="cards-container">
        {emojisData.map((emoji) => (
          <EmojiCard 
            key={emoji.id}
            symbol={emoji.symbol} 
            title={emoji.title} 
            keywords={emoji.keywords} 
          />
        ))}
      </div>
    </main>
  );
}



export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SearchInput />
      <CardsContainer />
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import './App.css'; 
import { getEmojis, type IEmojiItem } from './api/emojiApi';

interface EmojiCardProps {
  symbol: string;
  title: string;
  keywords: string;
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

export default function App() {
  const [emojis, setEmojis] = useState<IEmojiItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getEmojis(searchTerm);
      setEmojis(data);
    } catch (err) {
      setError('Не удалось загрузить данные. Проверьте, запущен ли сервер.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [searchTerm]);

  return (
    <div className="app-wrapper">
      <header className="header-section">
        <h1>Emoji Finder</h1>
        <h2>Find emoji by keywords</h2>
      </header>

      <div className="search-container">
        <input 
          className="search-input" 
          type="text" 
          placeholder="Введите название или ключевое слово..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        {searchTerm && (
          <button 
            className="clear-button" 
            onClick={() => setSearchTerm('')}
          >
            Очистить поиск
          </button>
        )}
      </div>

      <main className="main-content">
        {loading && <p>Загрузка...</p>}
        {error && <p className="error-message">{error}</p>}
        
        <div className="cards-container">
          {/* Добавлена проверка на пустой массив */}
          {!loading && !error && emojis.length === 0 ? (
            <p>Эмодзи не найдены</p>
          ) : (
            emojis.map((emoji) => (
              <EmojiCard 
                key={emoji.title} 
                symbol={emoji.emoji} 
                title={emoji.title} 
                keywords={emoji.keywords} 
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
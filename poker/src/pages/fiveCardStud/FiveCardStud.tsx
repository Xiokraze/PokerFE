import React, { useState } from 'react';
import PlayerInputForm from './PlayerForm';

type PlayerResult = {
  player: string;
  cards: string[];
  rank: string;
  handSummary: string;
};

type ApiResponse = {
  playerResults: PlayerResult[];
  winners: string[];
  reason: string;
};

const FiveCardStud: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStartGame = async (players: string[]) => {
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerNames: players }),
      };

      const response = await fetch('http://localhost:5285/api/play/fiveCardStud', requestOptions);

      if (!response.ok) throw new Error(`API error: ${response.statusText}`);
      const data: ApiResponse = await response.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <div>Loading cards... (poker spinner here)</div>;
  if (error) return <div>Error: {error}</div>;
  if (results)
    return (
      <div>
        <h2>Results</h2>
        <p>{results.reason}</p>
        {results.playerResults.map(({ player, cards, rank, handSummary }) => (
          <div key={player}>
            <h3>{player}</h3>
            <p>
              {rank} — {handSummary}
            </p>
            <div>
              {cards.map((card) => (
                <span key={card} style={{ marginRight: 4 }}>
                  {card}
                </span> // Replace with your PlayingCard component!
              ))}
            </div>
          </div>
        ))}
      </div>
    );

  return <PlayerInputForm onSubmit={handleStartGame} />;
};

export default FiveCardStud;

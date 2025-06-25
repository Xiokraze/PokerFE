import React, { useState } from 'react';
import PlayerInputForm from './PlayerForm';
import FiveCardStudResults from './results/FiveCardStudResults';
import PokerLoader from '../../components/pokerLoader/PokerLoader';
import Error from '../../components/containers/error/Error';

export type PlayerResult = {
  player: string;
  cards: string[];
  rank: string;
  handSummary: string;
};

export type ApiResponse = {
  playerResults: PlayerResult[];
  winners: string[];
  reason: string;
};

const FiveCardStud: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [players, setPlayers] = useState<string[]>([]);

  const clearError = () => {
    setError(null);
  };

  const handlePlayAgain = () => {
    setResults(null);
  };

  const handleStartGame = async (players: string[]) => {
    setLoading(true);
    setError(null);
    setResults(null);
    setPlayers(players); // Save for future use
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerNames: players }),
      };

      // Add simulated latency (e.g., 2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch('http://localhost:5285/api/play/fiveCardStud', requestOptions);

      if (!response.ok)
        throw {
          message: `API error: ${response.statusText}`,
        };
      const data: ApiResponse = await response.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <PokerLoader />}
      {error && <Error message={error} onClear={() => clearError()} />}
      {!error && results && (
        <FiveCardStudResults
          loading={loading}
          results={results}
          handlePlayAgain={handlePlayAgain}
        />
      )}
      {!error && !results && (
        <PlayerInputForm onSubmit={handleStartGame} loading={loading} initialPlayers={players} />
      )}
    </>
  );

  // if (loading) return <div>Loading cards... (poker spinner here)</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (results)
  //   return (
  //     <FiveCardStudResults loading={loading} results={results} handlePlayAgain={handlePlayAgain} />
  //   );

  return <PlayerInputForm onSubmit={handleStartGame} loading={loading} initialPlayers={players} />;
};

export default FiveCardStud;

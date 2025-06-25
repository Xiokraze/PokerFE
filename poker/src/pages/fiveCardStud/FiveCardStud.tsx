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

/**
 * FiveCardStud
 *
 * Main component managing the Five Card Stud poker game flow.
 *
 * - Handles player input submission and calls the backend API to play the game.
 * - Manages loading, error, and result states.
 * - Shows a loading spinner (PokerLoader) during async calls.
 * - Displays errors using the Error component.
 * - Displays game results with FiveCardStudResults component.
 * - Allows replaying the game by resetting results.
 *
 * Uses internal state to store players, results, loading status, and error messages.
 */
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

    // Save players locally for pre-filling input on replay
    setPlayers(players);

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerNames: players }),
      };

      // Simulated latency before API call to mimic realistic wait time
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch('http://localhost:5285/api/play/fiveCardStud', requestOptions);

      // Throws an error if API response is not ok, triggering the catch block
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
};

export default FiveCardStud;

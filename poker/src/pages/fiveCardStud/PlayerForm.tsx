import React, { useState } from 'react';

type PlayerInputFormProps = {
  onSubmit: (players: string[]) => void;
};

const MAX_PLAYERS = 10;

const PlayerInputForm: React.FC<PlayerInputFormProps> = ({ onSubmit }) => {
  const [players, setPlayers] = useState<string[]>(['']);

  const updatePlayer = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const addPlayer = () => {
    if (players.length < MAX_PLAYERS) {
      setPlayers([...players, '']);
    }
  };

  const removePlayer = (index: number) => {
    if (players.length > 1) {
      setPlayers(players.filter((_, i) => i !== index));
    }
  };

  const isValid = players.some((name) => name.trim().length > 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(players.filter((name) => name.trim().length > 0));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Player Names</h2>
      {players.map((player, index) => (
        <div key={index} style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder={`Player ${index + 1}`}
            value={player}
            onChange={(e) => updatePlayer(index, e.target.value)}
            required
            style={{ flexGrow: 1, marginRight: 8 }}
          />
          {players.length > 1 && (
            <button type="button" onClick={() => removePlayer(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <div style={{ marginBottom: 12 }}>
        <button type="button" onClick={addPlayer} disabled={players.length >= MAX_PLAYERS}>
          Add Player
        </button>
      </div>
      <button type="submit" disabled={!isValid}>
        Start Game
      </button>
    </form>
  );
};

export default PlayerInputForm;

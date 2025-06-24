import React, { useState } from 'react';
import styles from './PlayerForm.module.css';
import PokerButton from '../../components/button/pokerButton/PokerButton';
import CardOption from '../../components/playingCard/CardOption';

type PlayerFormProps = {
  onSubmit: (players: string[]) => void;
  loading: boolean;
  initialPlayers?: string[];
};

const PlayerForm: React.FC<PlayerFormProps> = ({ onSubmit, loading, initialPlayers = [] }) => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [players, setPlayers] = useState<string[]>(initialPlayers);

  const handleAddPlayer = () => {
    if (newPlayerName.trim() === '') return;

    setPlayers((prev) => [...prev, newPlayerName.trim()]);
    setNewPlayerName('');
  };

  return (
    <div className={styles.pageWrapper}>
      {players.length < 10 && (
        <div className={styles.inputGrid}>
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && newPlayerName.trim() !== '') {
                handleAddPlayer();
              }
            }}
            placeholder="Enter player name"
            className={styles.input}
          />
          <PokerButton
            onClick={handleAddPlayer}
            disabled={newPlayerName.trim() === ''}
            text="Add Player"
          />
        </div>
      )}

      <div className={styles.grid}>
        {players.map((player, index) => (
          <CardOption
            key={index}
            id={player}
            displayText={player}
            subText="Click to Remove"
            cardCode=""
            faceDown={true}
            onClick={() => setPlayers((prev) => prev.filter((_, i) => i !== index))}
          />
        ))}
      </div>

      {players.length >= 1 && (
        <div className={styles.inputGrid}>
          <PokerButton
            onClick={() => onSubmit(players)}
            disabled={loading}
            text={loading ? 'Dealing...' : 'Deal'}
          />
        </div>
      )}
    </div>
  );
};

export default PlayerForm;

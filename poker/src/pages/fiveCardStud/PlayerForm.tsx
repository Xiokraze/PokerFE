import React, { useState } from 'react';
import styles from './PlayerForm.module.css';
import PokerButton from '../../components/button/pokerButton/PokerButton';
import CardOption from '../../components/playingCard/CardOption';

type PlayerFormProps = {
  onSubmit: (players: string[]) => void;
  loading: boolean;
  initialPlayers?: string[];
};

/**
 * PlayerForm component
 *
 * Allows users to input and manage a list of player names for the game.
 * Provides input field to add players, shows added players as clickable cards
 * that can be removed by clicking, and a button to start the game dealing process.
 *
 * Props:
 * - onSubmit: callback function invoked with the array of player names when the user clicks "Deal"
 * - loading: boolean flag to disable inputs and buttons while the game is dealing/loading
 * - initialPlayers: optional array of player names to pre-populate the form
 *
 * Behavior:
 * - Users can add players one at a time by typing a name and clicking "Add Player" or pressing Enter.
 * - Player names are trimmed and empty entries are ignored.
 * - Up to 10 players can be added; the input is hidden beyond that.
 * - Added players are displayed as face-down card options with a "Click to Remove" subtitle.
 * - Clicking a player card removes that player from the list.
 * - The "Deal" button becomes enabled once at least one player is added, disabled during loading.
 */
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
            key={`${player}-${index}`}
            id={`${player}-${index}`}
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

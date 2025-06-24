import React, { useContext, useState } from 'react';
import styles from './PlayerForm.module.css';
import PokerButton from '../../components/button/pokerButton/PokerButton';
import CardOption from '../../components/playingCard/CardOption';

type PlayerFormProps = {
  onSubmit: (players: string[]) => void;
};

const PlayerForm: React.FC<PlayerFormProps> = ({ onSubmit }) => {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [players, setPlayers] = useState<string[]>([]);

  const handleAddPlayer = () => {
    if (newPlayerName.trim() === '') return;

    setPlayers((prev) => [...prev, newPlayerName.trim()]);
    setNewPlayerName('');
  };

  return (
    <>
      <div className={styles.grid}>
        <input
          type="text"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="Enter player name"
          className={styles.input}
        />
        <PokerButton
          onClick={handleAddPlayer}
          disabled={newPlayerName.trim() === ''}
          text="Add Player"
        />
      </div>

      <div className={styles.grid}>
        {players.map((player, index) => (
          <CardOption
            key={index}
            id={player}
            displayText={player}
            subText="Ready to play"
            cardCode=""
            faceDown={true}
            badgeText="Player"
            badgeColor="#0062ff"
            onClick={() => {}}
          />
        ))}
      </div>
    </>
  );
};

export default PlayerForm;

import React, { useState } from 'react';
import styles from './GameMenu.module.css';
import { useNavigate } from 'react-router-dom';
import PlayingCard from '../playingCard/PlayingCard';
import { games } from './games';

const GameMenu: React.FC = () => {
  const navigate = useNavigate();
  const [clickedId, setClickedId] = useState<string | null>(null);

  const handleClick = (id: string, routePath: string, enabled: boolean) => {
    if (!enabled) return;
    setClickedId(id);
    // Wait for animation to finish before navigating
    setTimeout(() => {
      navigate(routePath);
    }, 500); // matches animation duration
  };

  return (
    <div className={styles.grid}>
      {games.map(
        (
          { id, displayName, description, cardCode, badgeText, badgeColor, enabled, routePath },
          index,
        ) => (
          <div
            key={id}
            className={`${styles.cardContainer} ${enabled ? '' : styles.disabled} ${
              clickedId === id ? styles.chosenCard : ''
            }`}
            onClick={() => handleClick(id, routePath, enabled)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (enabled && (e.key === 'Enter' || e.key === ' '))
                handleClick(id, routePath, enabled);
            }}
            aria-disabled={!enabled}
            style={{ '--animation-delay': `${index * 200}ms` } as React.CSSProperties} // keep slide deal stagger
          >
            <PlayingCard code={cardCode} badgeText={badgeText} badgeColor={badgeColor} />
            <div className={styles.text}>
              <h3>{displayName}</h3>
              <p>{description}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default GameMenu;

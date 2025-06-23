import React from 'react';
import styles from './GameMenu.module.css';
import { useNavigate } from 'react-router-dom';
import PlayingCard from '../playingCard/PlayingCard';
import { games } from './games';

const GameMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.grid}>
      {games.map(
        ({ id, displayName, description, cardCode, badgeText, badgeColor, enabled, routePath }) => (
          <div
            key={id}
            className={`${styles.cardContainer} ${enabled ? '' : styles.disabled}`}
            onClick={() => enabled && navigate(routePath)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (enabled && (e.key === 'Enter' || e.key === ' ')) navigate(routePath);
            }}
            aria-disabled={!enabled}
          >
            <PlayingCard code={cardCode} badgeText={badgeText} badgeColor={badgeColor} />
            <h3 className={styles.gameName}>{displayName}</h3>
            <p className={styles.gameDescription}>{description}</p>
          </div>
        ),
      )}
    </div>
  );
};

export default GameMenu;

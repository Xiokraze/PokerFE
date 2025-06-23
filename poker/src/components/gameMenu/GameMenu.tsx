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
        (
          { id, displayName, description, cardCode, badgeText, badgeColor, enabled, routePath },
          index,
        ) => (
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
            style={{ '--animation-delay': `${index * 200}ms` } as React.CSSProperties} // stagger by 200ms
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

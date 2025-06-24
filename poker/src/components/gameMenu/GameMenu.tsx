import React, { useState } from 'react';
import styles from './GameMenu.module.css';
import { useNavigate } from 'react-router-dom';
import { games } from './games';
import CardOption from '../playingCard/CardOption';

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
          <CardOption
            key={id}
            id={id}
            cardCode={cardCode}
            badgeText={badgeText}
            badgeColor={badgeColor}
            displayText={displayName}
            subText={description}
            disabled={!enabled}
            selected={clickedId === id}
            onClick={() => handleClick(id, routePath, enabled)}
            animationDelay={index * 200}
          />
        ),
      )}
    </div>
  );
};

export default GameMenu;

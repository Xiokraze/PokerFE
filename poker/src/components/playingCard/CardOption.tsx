import React from 'react';
import styles from '../common/CardAnimation.module.css';
import PlayingCard from '../playingCard/PlayingCard';

type CardOptionProps = {
  id: string;
  cardCode: string;
  faceDown?: boolean;
  badgeText?: string;
  badgeColor?: string;
  displayText: string;
  subText?: string;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  animationDelay?: number;
};

const CardOption: React.FC<CardOptionProps> = ({
  id,
  cardCode,
  faceDown,
  badgeText,
  badgeColor,
  displayText,
  subText: description,
  onClick,
  disabled = false,
  selected = false,
  animationDelay = 0,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
      onClick?.();
    }
  };

  return (
    <div
      id={id}
      className={`
        ${styles.cardContainer}
        ${disabled ? styles.disabled : ''}
        ${selected ? styles.chosenCard : ''}
      `}
      onClick={!disabled ? onClick : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      style={{ '--animation-delay': `${animationDelay}ms` } as React.CSSProperties}
    >
      <PlayingCard
        faceDown={faceDown}
        code={cardCode}
        badgeText={badgeText}
        badgeColor={badgeColor}
      />
      <div className={styles.text}>
        <h3>{displayText}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CardOption;

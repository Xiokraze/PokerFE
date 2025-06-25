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

/**
 * CardOption component
 * Represents a selectable card option with animation, accessibility, and badge support.
 * Displays a PlayingCard with optional face-down state, badge text/color,
 * and textual display & description below the card.
 *
 * Props:
 * - id: unique string identifier for the card container
 * - cardCode: playing card code (e.g., "AS") for the card face
 * - faceDown: if true, shows card back instead of face
 * - badgeText: optional badge label shown on card
 * - badgeColor: badge background color
 * - displayText: main title text below the card
 * - subText: optional description text below the displayText
 * - onClick: click handler callback
 * - disabled: disables interaction and styles accordingly
 * - selected: indicates if the card is currently selected
 * - animationDelay: delay in ms for animation start (CSS var --animation-delay)
 *
 * Accessibility:
 * - role="button" and tabIndex=0 enable keyboard focus and interaction
 * - Supports keyboard activation via Enter and Space keys
 * - aria-disabled reflects disabled state
 */
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
  // Keyboard handler to trigger onClick on Enter or Space if not disabled
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

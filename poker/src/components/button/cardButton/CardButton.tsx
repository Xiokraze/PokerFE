import React from 'react';
import styles from './CardButton.module.css';
import PlayingCard from '../../playingCard/PlayingCard';

type CardButtonProps = {
  onClick?: () => void;
  text?: string;
  topText?: string;
  backColorCode?: string;
  disabled?: boolean;
};

/**
 * CardButton renders a stylized button with a face-down playing card.
 * Optionally overlays text above and below the card for labeling or prompts.
 * Typically used as a game action button or to represent a "mystery" choice.
 */
const CardButton: React.FC<CardButtonProps> = ({
  onClick,
  text = '',
  topText,
  backColorCode = 'back-red',
  disabled = false,
}) => {
  return (
    <button className={styles.cardButton} onClick={onClick} disabled={disabled}>
      <div className={styles.cardWrapper}>
        <PlayingCard code={backColorCode} faceDown />
        {topText && <div className={styles.topOverlay}>{topText}</div>}
        {text && <div className={styles.bottomOverlay}>{text}</div>}
      </div>
    </button>
  );
};

export default CardButton;

import React from 'react';
import styles from './PlayingCard.module.css';

type PlayingCardProps = {
  code?: string; // e.g. "4C"
  faceDown?: boolean;
  badgeText?: string; // e.g. "New", "Coming Soon"
  badgeColor?: string; // custom badge background color
  width?: number;
};

// Same mapping function as before
const suitMap: Record<string, string> = {
  C: 'club',
  D: 'diamond',
  H: 'heart',
  S: 'spade',
};

const rankMap: Record<string, string> = {
  A: '1',
  J: 'jack',
  Q: 'queen',
  K: 'king',
  // numbers 2-10 as is
};

const getCardFilename = (code: string): string => {
  if (!code || code.length < 2) return 'back.png';

  const rank = code.slice(0, code.length - 1);
  const suit = code.slice(-1);

  const suitName = suitMap[suit.toUpperCase()];
  if (!suitName) return 'back.png';

  const rankName = rankMap[rank.toUpperCase()] || rank;

  if (!rankName.match(/^(?:[2-9]|10|jack|queen|king|1)$/i)) return 'back.png';

  return `${suitName}_${rankName.toLowerCase()}.png`;
};

const PlayingCard: React.FC<PlayingCardProps> = ({
  code = 'back',
  faceDown = false,
  badgeText,
  badgeColor = '#f00', // default red
  width = 100,
}) => {
  const filename = faceDown ? 'back.png' : getCardFilename(code);

  const img1x = `/png/1x/${filename}`;
  const img2x = `/png/2x/${filename}`;

  return (
    <div
      className={styles.cardWrapper}
      style={{ width, position: 'relative', display: 'inline-block' }}
    >
      <img
        src={img1x}
        srcSet={`${img2x} 2x`}
        alt={badgeText ? `${badgeText} - ${code}` : `Playing card ${code.toUpperCase()}`}
        width={width}
        height="auto"
        draggable={false}
        loading="lazy"
        style={{ userSelect: 'none', display: 'block' }}
      />

      {badgeText && (
        <div
          className={styles.badge}
          style={{ backgroundColor: badgeColor }}
          aria-label={badgeText}
        >
          {badgeText.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default PlayingCard;

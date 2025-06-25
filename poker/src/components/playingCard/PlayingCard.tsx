import React, { useContext } from 'react';
import styles from './PlayingCard.module.css';
import ThemeContext from '../context/ThemeContext';

type PlayingCardProps = {
  code?: string; // e.g. "4C"
  faceDown?: boolean;
  badgeText?: string; // e.g. "New", "Coming Soon"
  badgeColor?: string; // custom badge background color
  width?: number;
};

/**
 * PlayingCard component
 * Renders a playing card image based on a card code (e.g., "4C" for 4 of Clubs).
 * Supports face-down variants with theme-aware backs.
 * Can display an optional badge with customizable text and color.
 * Supports responsive image loading with 1x and 2x PNG assets.
 *
 * Props:
 * - code: card code string, e.g. "AS" (Ace of Spades)
 * - faceDown: whether to show the back of the card instead of the face
 * - badgeText: optional badge label displayed over the card
 * - badgeColor: background color for the badge, default red
 * - width: card width in pixels, default 100
 */

// Maps single-letter suit codes to suit names used in filenames
const suitMap: Record<string, string> = {
  C: 'club',
  D: 'diamond',
  H: 'heart',
  S: 'spade',
};

// Maps special ranks to their filename equivalents; numbers map as-is
const rankMap: Record<string, string> = {
  A: '1',
  J: 'jack',
  Q: 'queen',
  K: 'king',
  // numbers 2-10 as strings remain unchanged
};

/**
 * Converts a card code (e.g., "AS") to the expected filename for the card image.
 * Returns 'back-red.png' as fallback if invalid or unknown.
 */
const getCardFilename = (code: string): string => {
  if (!code || code.length < 2) return 'back-red.png';

  const rank = code.slice(0, code.length - 1);
  const suit = code.slice(-1);

  const suitName = suitMap[suit.toUpperCase()];
  if (!suitName) return 'back-red.png';

  const rankName = rankMap[rank.toUpperCase()] || rank;

  // Validate rank name against allowed values
  if (!rankName.match(/^(?:[2-9]|10|jack|queen|king|1)$/i)) return 'back-red.png';

  return `${suitName}_${rankName.toLowerCase()}.png`;
};

const PlayingCard: React.FC<PlayingCardProps> = ({
  code = 'back-red',
  faceDown = false,
  badgeText,
  badgeColor = '#f00', // default red
  width = 100,
}) => {
  const themeCtx = useContext(ThemeContext);

  // Choose back image variant based on theme if faceDown is true, else face image
  const filename = faceDown
    ? themeCtx.isDarkTheme()
      ? 'back-red.png'
      : 'back-blue.png'
    : getCardFilename(code);

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

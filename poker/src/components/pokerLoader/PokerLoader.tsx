import React, { useContext } from 'react';
import styles from './PokerLoader.module.css';
import PlayingCard from '../playingCard/PlayingCard';
import ThemeContext from '../context/ThemeContext';

/**
 * PokerLoader component
 * Displays a centered loading overlay with a flipping card animation.
 * Shows a playing card face (default or from props) and a card back that flips.
 * The card back color changes based on the current theme (dark or light).
 *
 * Props:
 * - code: optional playing card code string to show on the front (e.g., "AS")
 *
 * Behavior:
 * - If no code prop is provided, uses "AS" (Ace of Spades) for dark theme or "AH" (Ace of Hearts) for light theme
 * - Card back uses "back-red" for dark theme and "back-blue" for light theme
 */
const PokerLoader: React.FC<{ code?: string }> = ({ code = '' }) => {
  const themeCTX = useContext(ThemeContext);
  const backCode = themeCTX.isDarkTheme() ? 'back-red' : 'back-blue';
  code = code ? code : themeCTX.isDarkTheme() ? 'AS' : 'AH';

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.flipperContainer}>
          <div className={styles.card}>
            <div className={styles.front}>
              <PlayingCard code={code} />
            </div>
            <div className={styles.back}>
              <PlayingCard code={backCode} faceDown />
            </div>
          </div>
        </div>
        <div className={styles.label}>Dealing...</div>
      </div>
    </div>
  );
};

export default PokerLoader;

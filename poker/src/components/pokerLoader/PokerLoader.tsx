import React, { useContext } from 'react';
import styles from './PokerLoader.module.css';
import PlayingCard from '../playingCard/PlayingCard';
import ThemeContext from '../context/ThemeContext';

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

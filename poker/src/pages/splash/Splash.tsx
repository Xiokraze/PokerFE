import { useEffect, useState } from 'react';
import GameOption from '../../components/gameOption/GameOption';
import { PokerChip } from '../../components/pokerChip/PokerChip';
import styles from './Splash.module.css';

export default function SplashPage() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const animatedChips = [
    { color: 'white', value: 1 },
    { color: 'red', value: 5 },
    { color: 'green', value: 25 },
    { color: 'black', value: 100 },
    { color: 'purple', value: 500 },
    { color: 'yellow', value: 1000 },
  ] as const;

  useEffect(() => {
    setShowAnimation(true);
    const timeout = setTimeout(() => setShowAnimation(false), 3000); // cleanup
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="splash-page">
      {animationComplete && (
        <>
          <p className="subtitle">Choose your game</p>
          <div className="game-grid">
            <GameOption title="Five Card Stud" playable path="/five-card-stud" />
            <GameOption title="Texas Hold'em" />
            <GameOption title="Omaha" />
            <GameOption title="Razz" />
          </div>
        </>
      )}

      {showAnimation &&
        animatedChips.map((chip, index) => (
          <div
            key={chip.color}
            className={styles.bounceRollAnimation}
            style={{
              animationDelay: `${index * 0.3}s`,
              top: `${40 + index * 10}%`,
            }}
            onAnimationEnd={() => setAnimationComplete(true)}
          >
            <PokerChip color={chip.color} value={chip.value} />
          </div>
        ))}
    </div>
  );
}

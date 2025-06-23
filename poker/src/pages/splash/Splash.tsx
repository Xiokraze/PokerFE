import { useEffect, useState } from 'react';
import { PokerChip } from '../../components/pokerChip/PokerChip';
import styles from './Splash.module.css';
import PageHeader from '../../components/labels/pageHeader/PageHeader';
import GameMenu from '../../components/gameMenu/GameMenu';

const SplashPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const animatedChips = [
    { color: 'white', value: 1 },
    { color: 'red', value: 5 },
    { color: 'blue', value: 10 },
    { color: 'green', value: 25 },
    { color: 'black', value: 100 },
    { color: 'purple', value: 500 },
    { color: 'yellow', value: 1000 },
  ] as const;

  useEffect(() => {
    setShowAnimation(true);
    const animationTimeout = setTimeout(() => setShowAnimation(false), 5000); // cleanup
    const animationCompleteTimeout = setTimeout(() => setAnimationComplete(true), 5000); // cleanup
    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(animationCompleteTimeout);
    };
  }, []);

  return (
    <div className="splash-page">
      {animationComplete && (
        <>
          <PageHeader title="Choose Your Game" />
          <GameMenu />
        </>
      )}
      {showAnimation &&
        animatedChips.map((chip, index) => (
          <div
            key={chip.color}
            className={styles.bounceRollAnimation}
            style={{
              animationDelay: `${index * 0.3}s`,
              top: `${70 + index * 80}px`,
            }}
          >
            <PokerChip color={chip.color} value={chip.value} />
          </div>
        ))}
    </div>
  );
};

export default SplashPage;

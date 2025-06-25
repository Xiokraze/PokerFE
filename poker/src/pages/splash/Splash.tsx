import { useEffect, useState } from 'react';
import { PokerChip } from '../../components/pokerChip/PokerChip';
import styles from './Splash.module.css';
import PageHeader from '../../components/labels/pageHeader/PageHeader';

/**
 * SplashPage component
 *
 * Displays an animated splash screen featuring bouncing and rolling poker chips
 * with increasing values and colors, then transitions to the game selection menu.
 *
 * Behavior:
 * - On mount, starts an animation sequence where chips appear and animate with staggered delays.
 * - After 5 seconds, the animation hides and the main content (PageHeader and GameMenu) is shown.
 *
 * State:
 * - showAnimation: boolean to control visibility of the chip animation.
 * - animationComplete: boolean to control when the game menu and header appear.
 *
 * Animation:
 * - Chips animate using CSS with staggered delays and vertical positioning.
 * - Chip colors and values represent typical poker chip denominations.
 */
import GameMenu from '../../components/gameMenu/GameMenu';

const SplashPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Define chip colors and values representing typical poker chips
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
    // Start the animation on component mount
    setShowAnimation(true);

    // Hide animation and show game menu after 5 seconds
    const animationTimeout = setTimeout(() => setShowAnimation(false), 5000); // cleanup
    const animationCompleteTimeout = setTimeout(() => setAnimationComplete(true), 5000); // cleanup

    // Cleanup timers on unmount
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

      {/* Show animated chips during animation */}
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

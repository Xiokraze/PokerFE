import { useContext } from 'react';
import styles from './ThemeToggleButton.module.css';
import ThemeContext from '../../context/ThemeContext';
import { PokerChip } from '../../pokerChip/PokerChip';

/**
 * ThemeToggleButton component
 * Renders a poker chip styled button that toggles the app theme between dark and light modes.
 * Uses ThemeContext to access current theme and toggle function.
 */
const ThemeToggleButton = () => {
  const themeCTX = useContext(ThemeContext);

  return (
    <div className={styles.togglePointer}>
      <PokerChip
        onClick={themeCTX.toggleTheme}
        icon={<img alt={'Toggle theme icon'} className={styles.themeSVG} src={themeCTX.icon} />}
        widthAndHeight={50}
        color={themeCTX.isDarkTheme() ? 'red' : 'blue'}
      />
    </div>
  );
};

export default ThemeToggleButton;

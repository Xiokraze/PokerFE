import { useContext } from 'react';
import styles from './ThemeToggleButton.module.css';
import ThemeContext from '../../context/ThemeContext';
import { PokerChip } from '../../pokerChip/PokerChip';

const ThemeToggleButton = () => {
  const themeCTX = useContext(ThemeContext);

  const changeThemeHandler = () => {
    themeCTX.toggleTheme();
  };

  return (
    <div className={styles.togglePointer}>
      <PokerChip
        onClick={changeThemeHandler}
        icon={<img alt={'theme toggle'} className={styles.themeSVG} src={themeCTX.icon} />}
        widthAndHeight={50}
        color={themeCTX.isDarkTheme() ? 'red' : 'blue'}
      />
    </div>
  );
};

export default ThemeToggleButton;

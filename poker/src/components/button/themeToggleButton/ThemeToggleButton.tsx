import { useContext } from 'react';
import styles from './ThemeToggleButton.module.css';
import ThemeContext from '../../context/ThemeContext';
import { PokerChip } from '../../pokerChip/PokerChip';

const NavbarOptionTheme = () => {
  const themeCtx = useContext(ThemeContext);

  const changeThemeHandler = () => {
    themeCtx.toggleTheme();
  };

  return (
    <div className={styles.togglePointer}>
      <PokerChip
        onClick={changeThemeHandler}
        icon={<img alt={'theme toggle'} className={styles.themeSVG} src={themeCtx.icon} />}
        widthAndHeight={50}
      />
    </div>
  );
};

export default NavbarOptionTheme;

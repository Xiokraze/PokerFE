import { PokerChip } from '../../pokerChip/PokerChip';
import homeSVG from '../../../assets/home.svg';
import styles from './HomeButton.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

/**
 * HomeButton renders a clickable PokerChip that acts as a "Home" button.
 * It dynamically colors the chip based on theme (red for dark, blue for light),
 * and uses a home icon centered on the chip.
 */
const HomeButton = () => {
  const navigate = useNavigate();
  const themeCTX = useContext(ThemeContext);

  const goHomeHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.togglePointer}>
      <PokerChip
        onClick={goHomeHandler}
        icon={<img alt={'home button'} className={styles.themeSVG} src={homeSVG} />}
        widthAndHeight={50}
        color={themeCTX.isDarkTheme() ? 'red' : 'blue'}
      />
    </div>
  );
};

export default HomeButton;

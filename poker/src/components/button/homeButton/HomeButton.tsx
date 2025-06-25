import { PokerChip } from '../../pokerChip/PokerChip';
import homeSVG from '../../../assets/home.svg';
import styles from './HomeButton.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const HomeButton = () => {
  const navigate = useNavigate();
  const themeCTX = useContext(ThemeContext);

  const goHomeHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.togglePointer}>
      <PokerChip
        onClick={() => goHomeHandler()}
        icon={<img alt={'home button'} className={styles.themeSVG} src={homeSVG} />}
        widthAndHeight={50}
        color={themeCTX.isDarkTheme() ? 'red' : 'blue'}
      />
    </div>
  );
};

export default HomeButton;

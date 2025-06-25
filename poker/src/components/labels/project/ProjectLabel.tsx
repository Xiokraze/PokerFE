import { JSX } from 'react';
import styles from './ProjectLabel.module.css';
import ThemeToggleButton from '../../button/themeToggleButton/ThemeToggleButton';
import HomeButton from '../../button/homeButton/HomeButton';

const ProjectLabel = (): JSX.Element => {
  return (
    <>
      <div className={styles.homeButtonDiv}>
        <HomeButton />
      </div>
      <div className={styles.projectLabel}>
        <p className={styles.flickerText} data-heading="P"></p>
        <p className={styles.nonFlickerText}>oker</p>
        <p className={styles.flickerText} data-heading="R"></p>
        <p className={styles.nonFlickerText}>oyale</p>
      </div>
      <div className={styles.toggleButtonDiv}>
        <ThemeToggleButton />
      </div>
    </>
  );
};

export default ProjectLabel;

import { JSX } from 'react';
import styles from './ProjectLabel.module.css';
import ThemeToggleButton from '../../button/themeToggleButton/ThemeToggleButton';

const ProjectLabel = (): JSX.Element => {
  return (
    <>
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

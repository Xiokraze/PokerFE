import React from 'react';
import styles from './FooterTicker.module.css';

/**
 * FooterTicker component
 * Displays a continuously scrolling ticker with author contact info.
 * Uses duplicate text spans to create seamless horizontal scrolling effect via CSS.
 */
const FooterTicker: React.FC = () => {
  const text = (
    <>
      Author: Joshua Worthington &nbsp; • &nbsp; Email: Xiokraze@gmail.com &nbsp; • &nbsp; LinkedIn:
      https://www.linkedin.com/in/xiokraze/
    </>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          <span className={styles.tickerText}>{text}</span>
          <span className={styles.tickerText}>{text}</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterTicker;

import React from 'react';
import styles from './FooterTicker.module.css';

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

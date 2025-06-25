import React from 'react';
import styles from './Error.module.css';
import PokerButton from '../../button/pokerButton/PokerButton';

type ErrorProps = {
  message: string;
  onClear: () => void;
};

const Error: React.FC<ErrorProps> = ({ message, onClear }) => {
  return (
    <div className={styles.errorWrapper} role="alert">
      <div className={styles.errorBox}>
        <span className={styles.message}>{message}</span>
        <PokerButton text="OK" onClick={onClear} />
      </div>
    </div>
  );
};

export default Error;

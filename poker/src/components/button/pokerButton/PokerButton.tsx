// Button.tsx
import React from 'react';
import styles from './PokerButton.module.css';

type ButtonProps = {
  text: string;
  onClick?: (...args: any[]) => any;
  disabled: boolean;
};

const PokerButton: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button className={styles.pokerButton} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default PokerButton;

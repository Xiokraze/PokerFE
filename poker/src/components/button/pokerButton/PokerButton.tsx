// Button.tsx
import React from 'react';
import styles from './PokerButton.module.css';

type ButtonProps = {
  text: string;
  onClick?: (...args: any[]) => any;
  disabled?: boolean;
};

/**
 * PokerButton is a reusable themed button styled to fit the poker aesthetic.
 * Supports text labeling, optional click handling, and a disabled state.
 */
const PokerButton: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button type="button" className={styles.pokerButton} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default PokerButton;

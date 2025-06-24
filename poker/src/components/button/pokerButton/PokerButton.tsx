// Button.tsx
import React from 'react';
import styles from './PokerButton.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const PokerButton: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button className={styles.pokerButton} {...rest}>
      {text}
    </button>
  );
};

export default PokerButton;

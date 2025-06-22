import React from 'react';
import styles from './PokerChip.module.css';

interface PokerChipProps {
  widthAndHeight?: number;
  color?: 'red' | 'blue' | 'green' | 'black' | 'purple' | 'gold' | 'white' | 'yellow';
  value?: number | string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>; // optional onClick handler
  icon?: React.ReactNode;
}

export const PokerChip: React.FC<PokerChipProps> = ({
  widthAndHeight = 120,
  color = 'red',
  value,
  text,
  onClick,
  icon,
}) => {
  const chipClass = `${styles.pokerChip} ${styles[color]}`;

  return (
    <div
      style={{ width: `${widthAndHeight}px`, height: `${widthAndHeight}px` }}
      className={chipClass}
      onClick={onClick}
    >
      <div className={styles.chipCenter}>{icon || text || value}</div>
    </div>
  );
};

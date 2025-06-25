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

/**
 * PokerChip component
 * Renders a circular poker chip with customizable size, color, and center content.
 * Center content can be an icon (ReactNode), text string, or numeric value.
 * Supports optional onClick handler for interactivity.
 *
 * Props:
 * - widthAndHeight: size of the chip in pixels (square), default 120
 * - color: chip color, restricted to a predefined set of strings
 * - value: numeric or string value shown at the center if no icon/text provided
 * - text: string displayed at the center (used if icon not provided)
 * - onClick: optional click handler function
 * - icon: ReactNode to display at center instead of text/value
 */
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

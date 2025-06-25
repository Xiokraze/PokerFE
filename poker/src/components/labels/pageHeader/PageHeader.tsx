import React from 'react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/**
 * PageHeader component
 * Displays a page header with a required title and optional subtitle.
 * Uses semantic <header> tag and styled headings for consistent page sections.
 */
const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className={styles.pageHeader}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
};

export default PageHeader;

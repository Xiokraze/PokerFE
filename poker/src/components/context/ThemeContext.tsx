import React, { useState, useEffect, ReactNode, JSX } from 'react';
import sunSVG from '../../assets/sun.svg';
import moonSVG from '../../assets/moon.svg';

export enum Theme {
  Dark = '',
  Light = 'light',
  PokerTheme = 'PokerTheme',
}

/**
 * ThemeContext provides theme state and toggling functionality.
 * - Persists theme in localStorage under 'PokerTheme' key.
 * - Applies/removes CSS class for light theme on document.body.
 * - Exposes toggle, forceLight, currentTheme, and isDark helpers.
 * - Updates theme icon (sun/moon) based on current theme.
 */
const ThemeContext = React.createContext({
  dark: Theme.Dark,
  light: Theme.Light,
  icon: '',
  toggleTheme: () => {},
  currentTheme: (): any => {},
  forceLightTheme: () => {},
  isDarkTheme: (): boolean => false,
});

type TThemeProps = {
  children: ReactNode;
};
export const ThemeContextProvider = ({ children }: TThemeProps): JSX.Element => {
  let savedTheme = localStorage.getItem(Theme.PokerTheme);
  const [theme, setTheme] = useState(savedTheme ? savedTheme : Theme.Dark);
  const [icon, setIcon] = useState(savedTheme === Theme.Light ? moonSVG : sunSVG);

  useEffect(() => {
    theme === Theme.Light
      ? document.body.classList.add(Theme.Light)
      : document.body.classList.remove(Theme.Light);
    localStorage.setItem(Theme.PokerTheme, theme);
    setIcon(theme === Theme.Light ? moonSVG : sunSVG);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(savedTheme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  const forceLightTheme = () => {
    setTheme(Theme.Light);
  };

  const currentTheme = (): string => {
    return theme;
  };

  const isDarkTheme = () => theme === Theme.Dark;

  const contextValue = {
    light: Theme.Light,
    dark: Theme.Dark,
    icon: icon,
    toggleTheme: toggleTheme,
    currentTheme: currentTheme,
    forceLightTheme: forceLightTheme,
    isDarkTheme: isDarkTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;

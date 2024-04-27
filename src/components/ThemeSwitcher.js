import React from 'react';
import { useTheme } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === 'light' ? (
        // Moon icon for dark mode switch
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        // Sun icon for light mode switch
        <FontAwesomeIcon icon={faSun} />
      )}
    </button>
  );
};

export default ThemeSwitcher;

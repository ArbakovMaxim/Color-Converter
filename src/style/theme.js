import { useState } from 'react';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';


export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return {
    theme: isDarkMode ? lightTheme : darkTheme,
    toggleTheme,
  };
};


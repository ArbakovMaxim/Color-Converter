// import { useState } from 'react';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';


// export const useTheme = () => {
//   const [isTheme, setIsTheme] = useState('lightTheme');

//   const isDarkTheme = () => {
//     setIsTheme('darkTheme');
//   };


//   const isLightTheme = () => {
//     setIsTheme('lightTheme');
//   };

//   return {
//     theme: isTheme === 'lightTheme' ? lightTheme : darkTheme,
//     isDarkTheme,
//     isLightTheme,
//   };
// };

import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';


export const ThemeContext = React.createContext();

function ThemeWrapper({ children }) {
  const [isTheme, setIsTheme] = useState('lightTheme');

  const isDarkTheme = () => {
    setIsTheme('darkTheme');
  };


  const isLightTheme = () => {
    setIsTheme('lightTheme');
  };

  const theme = useMemo(() => {
    return isTheme === 'lightTheme' ? lightTheme : darkTheme
  }, [isTheme]);

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, isLightTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeWrapper;


import React, { createContext, useCallback, useMemo, useState } from 'react';

export const ThemeContext = createContext();

// useCallback && useMemo used for memorize data;
// useCallback will memorize function
// useMemo will memorize data(i.e object, array)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    setTheme((val) => (val === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

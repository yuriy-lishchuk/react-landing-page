import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { themeCreator } from './base';

export const MultiThemeContext = React.createContext({
  themeName: 'normal',
  setThemeName: (themeName: string): void => {},
});

const MultiThemeProvider: React.FC = (props) => {
  // Read current theme from localStorage or maybe from an api
  const curThemeName = 'normal';

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName);
  // Get the theme object by theme name
  const theme = themeCreator(themeName);

  const provider = {
    themeName: themeName,
    setThemeName: (themeName: string): void => {
      _setThemeName(themeName);
    },
  };

  return (
    <MultiThemeContext.Provider value={provider}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </MultiThemeContext.Provider>
  );
};

export default MultiThemeProvider;

import React from 'react';
import ConfigureRouter from './route';
//import { ThemeProvider } from '@material-ui/styles';
//import theme from './theme';
import MultiThemeProvider from './theme/MultiThemeProvider';

function App() {
  return (
    <MultiThemeProvider>
      <ConfigureRouter />
    </MultiThemeProvider>
  );

}

export default App;

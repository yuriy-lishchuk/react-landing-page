import { createMuiTheme } from '@material-ui/core/styles';

const black = createMuiTheme({
  typography: {
    fontFamily: ['Monument Grotesk'].join(','),
    fontSize: 15,
  },
  palette: {
    background: {
      default: '#000',
    },
    primary: {
      main: '#5D2070',
    },
    secondary: {
      main: '#1C4ECF',
    },
    warning: {
      main: '#1C4ECF',
    },
    text: {
      primary: '#FFFEFE',
    },
  },
});

export default black;

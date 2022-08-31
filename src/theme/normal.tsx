import { createMuiTheme } from '@material-ui/core/styles';

const normal = createMuiTheme({
  typography: {
    fontFamily: ['Monument Grotesk'].join(','),
    fontSize: 15,
    h1: {
      fontFamily: ['GT Flexa Standard Bold'].join(','),
    },
    h2: {
      fontFamily: ['Monument Grotesk'].join(','),
    },
    h3: {
      fontFamily: ['GT Flexa Standard Bold'].join(','),
      fontSize: 50,
      color: '#0E103C',
      fontStyle: 'normal',
      lineHeight: '70px',
    },
    h4: {
      fontFamily: ['GT Flexa Standard Medium'].join(','),
    },
    h5: {
      fontFamily: ['GT Flexa'].join(','),
    },
    h6: {
      fontFamily: ['GT Flexa Standard Bold'].join(','),
      fontSize: 32,
      color: '#0E103C',
      fontStyle: 'normal',
      lineHeight: '44.29px',
    },
    subtitle1: {
      fontFamily: ['GT Flexa Standard Bold'].join(','),
      fontSize: 40,
      color: '#6A6FDA',
      lineHeight: '55px',
      marginBottom: 10,
    },
    subtitle2: {
      fontFamily: ['GT Flexa Standard Bold'].join(','),
      fontSize: 52,
      color: '#0E103C',
      fontStyle: 'normal',
      lineHeight: '72px',
      marginBottom: 25,
    },
    body2: {
      fontSize: 18,
      color: '#0E103C',
      fontStyle: 'normal',
      lineHeight: '27.6px',
    },
    button: {
      fontFamily: ['GT Flexa'].join(','),
    },
  },
  palette: {
    background: {
      default: '#EEEBFF',
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
      primary: '#1A0836',
    },
  },
});

export default normal;

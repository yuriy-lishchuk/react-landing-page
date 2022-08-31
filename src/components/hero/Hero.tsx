import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ButtonShadow from '../buttons/ButtonShadow';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    paddingTop: '5vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '10vh',
      textAlign: 'center',
    },
  },
  title: {
    fontSize: 100,
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
      lineHeight: '58px',
    },
  },
  description: {
    fontSize: '2.5vh',
    marginTop: 20,
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  joinBetaWaitlistButton: {
    minWidth: 284,
  },
  downArrow: {
    fontFamily: 'GT Flexa Standard Bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#392461',
    marginTop: 150,
    '&:hover': {
      // animation: '$swing 1s ease',
      cursor: 'default',
    },
  },
  '@keyframes swing': {
    '15%': {
      '-webkit-transform': 'translateY(5px)',
      transform: 'translateY(5px)',
    },
    '30%': {
      '-webkit-transform': 'translateY(-5px)',
      transform: 'translateY(-5px)',
    },
    '50%': {
      '-webkit-transform': 'translateY(3px)',
      transform: 'translateY(3px)',
    },
    '65%': {
      '-webkit-transform': 'translateY(-3px)',
      transform: 'translateY(-3px)',
    },
    '80%': {
      '-webkit-transform': 'translateY(2px)',
      transform: 'translateY(2px)',
    },
    '100%': {
      '-webkit-transform': 'translateY(0)',
      transform: 'translateY(0)',
    },
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item md={9} xs={12}>
        <Typography className={classes.title} variant="h1">
          Outsmart
          <br />
          The Market,
          <br />
          Together.
        </Typography>
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography className={classes.description} variant="h2">
          Prysm is a social trading movement built on DeFi. Discover your next
          trade, execute on global liquidity, and earn for your contributions.
        </Typography>
        <ButtonShadow
          title="Join Beta Waitlist"
          link="#"
          arrow={false}
          fontWeight={600}
          className={`kol-popup-308230 ${classes.joinBetaWaitlistButton}`}
          preventDef={true}
        />
      </Grid>
      <div>
        <Typography className={classes.downArrow}>↓</Typography>
      </div>
    </Grid>
  );
}

export default Hero;

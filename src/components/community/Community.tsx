import React from 'react';
import { Typography } from '@material-ui/core';
import ButtonShadow from '../buttons/ButtonShadow';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '80vh',
    textAlign: 'center',
    marginTop: 82,
    marginBottom: 79,
    /** Required to appear over gradient */
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  font18: {
    fontSize: '2.5vh',
    fontStyle: 'normal',
    width: '100%',
    maxWidth: 390,
    color: '#1F1F41',
    margin: 'auto',
    marginTop: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'unset',
      maxWidth: 270,
      lineHeight: 'unset',
    },
  },
  pt2: {
    paddingTop: 85,
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
    },
  },
}));

function Community() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.pt2} variant="h3">
        Let's Hang Out
      </Typography>
      <Typography className={classes.font18}>
        We’re talking about the markets and uncovering opportunities live.
        <br />
        <br />
        Top users on Prysm will also get access to special channels and roles.
      </Typography>
      <ButtonShadow
        link="https://discord.gg/p5SED4XbU6"
        title="Join the Discord"
        fontWeight={400}
        arrow={false}
      />
    </div>
  );
}

export default Community;

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { testimonials } from '../../utils/mock';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: 85,
    marginTop: 60,
    paddingLeft: '5vw',
    paddingRight: '5vw',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 100,
      paddingLeft: 0,
      paddingRight: 0,
      textAlign: 'center',
    },
  },
  avatar: {
    marginTop: '0',
    marginBottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cryptoHandle: {
    fontSize: '16px',
    fontWeight: 600,
    marginTop: '10px',
    textAlign: 'center',
  },
  textCentered: {
    textAlign: 'center',
    padding: 40,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      paddingTop: 40,
      paddingBottom: 40,
    },
  },
  testimonial: {
    fontSize: 18,
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'unset',
    },
  },
}));

function Testimonials() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {testimonials.map((item, index: number) => (
        <Grid item md={4} xs={12} key={index} className={classes.textCentered}>
          <div className={classes.avatar}>
            <img src={item.avatar} alt={item.handle} />
          </div>
          <Typography className={classes.cryptoHandle}>
            {item.handle}
          </Typography>
          <Typography className={classes.testimonial}>
            "{item.testimonial}"
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default Testimonials;

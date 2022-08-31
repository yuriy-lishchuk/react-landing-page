import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ButtonShadow from '../buttons/ButtonShadow';
import { contentCreators } from '../../utils/mock';
import creatorsViz from '../../assets/creatorsViz-small.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    textAlign: 'center',
  },
  description: {
    width: '100%',
    maxWidth: 345,
    textAlign: 'left',
    marginTop: 20,
    margin: 'auto',
    padding: 32,
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      padding: 0,
      marginBottom: 30,
      textAlign: 'center',
    },
  },
  subTitle1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  subTitle2: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
      marginBottom: 0,
    },
  },
  img: {
    width: '100%',
    maxWidth: 561,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
  },
  pBottom80: {
    paddingBottom: 80,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 30,
    },
  },
}));

function Creators() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle1} variant="subtitle1">
        Creators
      </Typography>
      <Typography className={classes.subTitle2} variant="subtitle2">
        Engage and Monetize.
      </Typography>
      <Grid container className={classes.pBottom80}>
        {contentCreators.map((item, index: number) => (
          <Grid item md={4} sm={12} key={index}>
            <Typography className={classes.description} variant="body2">
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item md={2} />
        <div>
          <img src={creatorsViz} alt="Creators" className={classes.img} />
        </div>
      </Grid>
      <ButtonShadow
        link="https://vpagmq8r6ld.typeform.com/to/ZXSRlbZI"
        title="Let's work together"
        fontWeight={400}
        arrow={true}
      />
    </div>
  );
}

export default Creators;

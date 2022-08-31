import React, { Fragment, useState, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { traderProps } from '../../utils/mock';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    boxShadow: 'none',
    marginTop: 30,
    marginBottom: 30,
    paddingTop: '20vh',
    paddingBottom: '20vh',
    top: 0,
    position: 'sticky',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      paddingTop: 0,
      position: 'static',
    },
  },
  stickyParent: {
    height: '260vh',
    /** Mobile doesn't operate stickily */
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
  },
  titleText: {
    paddingTop: '85px',
    marginBottom: '16px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 25,
      marginLeft: 0,
      marginBottom: 0,
    },
  },
  visualContainer: {
    position: 'relative',
    zIndex: 1,
  },
  visualContainerGradient: {
    position: 'absolute',
    width: '30vw',
    height: '30vh',
    zIndex: -1,
    top: 0,
    left: 0,
    '-webkit-filter': 'blur(150px)',
    filter: 'blur(150px)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  underscore: {
    width: '100%',
    height: '2px',
    backgroundColor: 'black',
    animation: '$fadeIn .5s ease-in',
  },
  img: {
    width: 516,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  imgTop: {
    top: 50,
  },
}));

function TradersKeyProps() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const sectionOffset = window.innerHeight * 2;

    const vhOffsets = {
      0: sectionOffset,
      1: sectionOffset + window.innerHeight * 0.65,
      2: sectionOffset + window.innerHeight * 1.3,
    };
    const listenScrollEvent = () => {
      const switchTab = (index: number) => {
        return setSelected(index);
      };

      if (window.scrollY > vhOffsets[0] && window.scrollY < vhOffsets[1]) {
        return switchTab(0);
      } else if (
        window.scrollY > vhOffsets[1] &&
        window.scrollY < vhOffsets[2]
      ) {
        return switchTab(1);
      } else if (window.scrollY > vhOffsets[2]) {
        return switchTab(2);
      }
    };
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={classes.stickyParent}>
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item md={6} className={classes.visualContainer}>
            <div
              className={classes.visualContainerGradient}
              style={{ background: traderProps[selected].background }}
            />
            {traderProps.map((item, index: number) =>
              // TODO: Clean this up. Do we really need to iterate over the array on each render in order to show/hide img?
              selected === index ? (
                <img
                  src={item.img}
                  alt={`Trader img ${index}`}
                  className={classes.img}
                  style={{ marginTop: item.marginTop }}
                />
              ) : null,
            )}
          </Grid>
          <Grid item md={6}>
            {traderProps.map((item, index: number) => (
              <Fragment>
                <Typography className={classes.titleText} variant="h4">
                  {item.title}
                </Typography>
                {selected === index ? (
                  <div className={classes.underscore} />
                ) : null}
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TradersKeyProps;

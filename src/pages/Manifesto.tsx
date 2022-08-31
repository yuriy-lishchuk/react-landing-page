import React, { useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { Grid, Typography } from '@material-ui/core';

import {
  PrysmImg,
  ManifestoCard1,
  ManifestoCard2,
} from 'components/manifesto/Common';

import { largeCards, smallCards } from 'utils/manifestoMock';

const useStyles = makeStyles((theme: Theme) => ({
  title1: {
    fontSize: 97,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '140%',
    textAlign: 'center',
    fontFamily: 'GT Flexa Standard Bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 46,
    },
  },
  title2: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '140%',
    textAlign: 'center',
    fontFamily: 'GT Flexa Standard Bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      padding: '0 10px',
      width: 308,
    },
  },
  textContent: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '33px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '574px',
    alignSelf: 'center',
    marginTop: '40px',
    fontFamily: 'ABCMonumentGrotesk',
    [theme.breakpoints.down('sm')]: {
      fontSize: 17,
      lineHeight: '24px',
      maxWidth: 308,
      textAlign: 'left',
    },
  },
  container: {
    alignItems: 'center',
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 118,
  },
  cards: {
    marginBottom: 100,
  },
  fWidth: {
    width: '100%',
  },
  button: {
    borderRadius: 8,
    textTransform: 'none',
    backgroundColor: '#FFF',
    width: '100%',
    maxWidth: 573,
    height: 64,
    alignSelf: 'center',
    margin: '40px 0',
    fontSize: 24,
    fontWeight: 500,
    color: '#000',
    fontFamily: 'ABCMonumentGrotesk',
    '&:hover': {
      backgroundColor: 'rgba(255, 254, 254, 0.8)',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 343,
    },
  },
  underlineNone: {
    width: '96%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    textDecoration: 'none',
  },
}));

function Manifesto() {
  const classes = useStyles();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container className={classes.container}>
        <PrysmImg />
        <Typography className={classes.title1}>
          IF YOU CAN’T WIN, REINVENT THE GAME
        </Typography>
        {largeCards.map((item, index) => (
          <ManifestoCard1
            title={item.title}
            subTitles={item.subTitles}
            key={index}
          />
        ))}

        <Grid container className={classes.cards} spacing={2}>
          {smallCards.map((item, index: number) => (
            <Grid className={classes.fWidth} item key={index} md={4}>
              <ManifestoCard2 title={item} />
            </Grid>
          ))}
        </Grid>

        <Typography className={classes.title2}>
          LET’S REINVENT THE GAME, TOGETHER
        </Typography>
        <Typography className={classes.textContent}>
          Prysm is a collective trading movement, built on open, fair, community
          owned financial infrastructure. We allow anyone in the world to share,
          discover and execute investment opportunities.
        </Typography>
        <Typography className={classes.textContent}>
          Together, we can create a collective edge for those disadvantaged by
          the current financial game.
        </Typography>
        <a
          className={classes.underlineNone}
          onClick={(event) => {
            event.preventDefault();
            (window as any).kol_modal_308230.show();
          }}
        >
          <Button className={classes.button}>Join The Beta</Button>
        </a>
      </Container>
    </div>
  );
}

export default Manifesto;

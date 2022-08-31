import React, { useEffect } from 'react';

import { Container, Hidden, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useMatomo } from '@datapunt/matomo-tracker-react';

import Hero from '../components/hero/Hero';
import Traders from '../components/traders/Traders';
import TradersKeyProps from '../components/traders/TradersKeyProps';
import TradersKeyPropsMobile from '../components/traders/TradersKeyPropsMobile';
import Testimonials from '../components/community/Testimonials';
import Incubation from '../components/community/Incubation';
import Creators from '../components/creators/Creators';
import Community from '../components/community/Community';
import Footer from '../components/Footer';

import heroImg from '../assets/heroImg-small.png';
import footerBg from '../assets/footerBg-small.png';

const useStyles = makeStyles((theme: Theme) => ({
  relative: {
    position: 'relative',
  },
  heroContainer: {
    marginLeft: 70,
    marginRight: 70,
    maxWidth: '90vw',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      maxWidth: '100vw',
    },
  },
  purpleBg: {
    backgroundColor: '#392461',
  },
  lightPurpleBg: {
    backgroundColor: '#F2E8FA',
  },
  narrowContainer: {
    paddingLeft: '6vw',
    paddingRight: '6vw',
  },
  heroImg: {
    backgroundImage: `url(${heroImg})`,
    width: '100vw',
    height: '110vh',
    position: 'absolute',
    backgroundPosition: '250px -180px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 2200,
    zIndex: -1,
  },
  bgGradient: {
    backgroundImage: `url(${footerBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: 130 /** Needed to cover difference in height between html and body; not sure what is causing this */,
  },
}));

function Home() {
  const classes = useStyles();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Hidden smDown>
        <Box className={classes.heroImg} />
      </Hidden>
      <Container className={classes.heroContainer}>
        <Hero />
      </Container>
      <div className={classes.purpleBg}>
        <Container className={classes.narrowContainer}>
          <Traders />
        </Container>
      </div>
      <div className={classes.lightPurpleBg}>
        <Container className={classes.narrowContainer}>
          <Hidden smDown>
            <TradersKeyProps />
          </Hidden>
          <Hidden mdUp>
            <TradersKeyPropsMobile />
          </Hidden>
        </Container>
      </div>
      <div className={classes.bgGradient}>
        <Container className={`${classes.narrowContainer}`}>
          <Creators />
          <Testimonials />
          <Incubation />
          <Community />
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

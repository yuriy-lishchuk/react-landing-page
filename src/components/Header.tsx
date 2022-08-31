import React, { Fragment, useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ButtonText from './buttons/ButtonText';
import IconButton from '@material-ui/core/IconButton';

import Logo from '../assets/Prysm.svg';
import Twitter from '../assets/twitter.svg';
import Discord from '../assets/discord.svg';
import TwitterWhite from 'assets/manifesto/twitter.svg';
import DiscordWhite from 'assets/manifesto/discord.svg';
import { MultiThemeContext } from '../theme/MultiThemeProvider';
import { Button, withStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  app: {
    padding: '40px 0',
    background: 'transparent',
    boxShadow: 'none',
  },
  root: {
    justifyContent: 'space-between',
    display: 'flex',
    marginLeft: 70,
    marginRight: 70,
    paddingLeft: 24,
    paddingRight: 24,
    color: '#FFF',
  },
  logo: {
    height: 55,
    marginTop: 7,
    cursor: 'pointer',
  },
  ml3: {
    marginLeft: 20,
    animation: '$popDown 0.5s ease forwards',
    '&:hover': {
      animation: '$popUp 0.5s ease forwards',
    },
  },
  ml4: {
    marginLeft: 26,
    animation: '$popDown 0.5s ease forwards',
    '&:hover': {
      animation: '$popUp 0.5s ease forwards',
    },
  },
  '@keyframes popUp': {
    from: {
      '-webkit-transform': 'translateY(0px)',
      transform: 'translateY(0px)',
    },
    to: {
      '-webkit-transform': 'translateY(-5px)',
      transform: 'translateY(-5px)',
    },
  },
  '@keyframes popDown': {
    from: {
      '-webkit-transform': 'translateY(-5px)',
      transform: 'translateY(-5px)',
    },
    to: {
      '-webkit-transform': 'translateY(0px)',
      transform: 'translateY(0px)',
    },
  },
  announcement: {
    fontSize: 15,
    padding: '6px 10px',
    marginTop: 7,
    height: 35,
    '--webkit-border-radius': 20,
    '--moz-border-radius': 20,
    borderRadius: 20,
    background: '#000',
    fontFamily: 'sans-serif',
  },
  link: {
    textDecoration: 'none',
    color: '#FFF',
    fontFamily: 'GT Flexa',
  },
}));

const LaunchButton = withStyles({
  root: {
    backgroundColor: '#7A7FF6',
    borderRadius: 20,
    '&:hover': {
      backgroundColor: '#6268E5',
    },
    padding: '8px 16px',
    marginLeft: 20,
  },
  label: {
    textTransform: 'none',
    color: '#FFF',
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: 'GT Flexa',
  },
})(Button);

function Header() {
  const classes = useStyle();
  const params = useLocation();
  const history = useHistory();
  const [isManifesto, setIsManifesto] = useState(false);

  const { themeName } = useContext(MultiThemeContext);

  useEffect(() => {
    if (params.pathname.includes('manifesto')) {
      setIsManifesto(true);
    }
  }, [params]);

  return (
    <Fragment>
      <CssBaseline />
      <AppBar className={classes.app} position={'static'}>
        <div className={classes.root}>
          <img
            className={classes.logo}
            src={Logo}
            alt="logo"
            onClick={() => {
              history.push('/');
            }}
          />
          <div>
            {!isManifesto && (
              <ButtonText
                title="Manifesto"
                link="/manifesto"
                marginRight={26}
              />
            )}
            {isManifesto && (
              <ButtonText title="Home" link="/" marginRight={26} />
            )}
            <ButtonText
              title="Careers"
              link="https://www.notion.so/prysmxyz/Join-Us-on-Our-Mission-0c9a715bc3b64d56b5226b7c3e6b8d25"
              toolTip={'new'}
              toolTipColor={'#FF9365'}
              newOpen
            />
            <IconButton
              onClick={() => {
                window.open('https://twitter.com/prysm_xyz');
              }}
              className={classes.ml4}
              aria-label="twitter"
            >
              <img
                src={themeName != 'black' ? Twitter : TwitterWhite}
                alt="Twitter"
              />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open('https://discord.gg/p5SED4XbU6');
              }}
              className={classes.ml3}
              aria-label="discord"
            >
              <img
                src={themeName != 'black' ? Discord : DiscordWhite}
                alt="Discord"
              />
            </IconButton>
            <a
              href="https://beta.prysm.xyz/signin"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LaunchButton>Launch App</LaunchButton>
            </a>
          </div>
        </div>
      </AppBar>
    </Fragment>
  );
}

export default Header;

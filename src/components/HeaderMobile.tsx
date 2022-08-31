import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Logo from '../assets/Prysm.svg';
import Twitter from '../assets/twitter.svg';
import Discord from '../assets/discord.svg';

import { useHistory, useLocation } from 'react-router-dom';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
}

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  app: {
    padding: '15px 0',
    background: 'transparent',
    boxShadow: 'none',
  },
  logo: {
    height: 50,
  },
  navRight: {
    float: 'right',
  },
  icon: {
    background: 'transparent',
    color: theme.palette.text.primary,
    fontSize: 25,
  },
  closeIcon: {
    background: 'transparent',
    fontSize: 25,
  },
  menu: {
    marginTop: 30,
    color: '#000',
  },
  menuItem: {
    fontSize: 20,
    paddingLeft: 45,
  },
  listItem: {
    display: 'inline-block',
  },
  mr: {
    marginLeft: 25,
  },
  navbar: {
    width: '100%',
  },
  font35: {
    fontSize: 28,
  },
  announcement: {
    fontSize: 15,
    padding: '6px 10px',
    marginBottom: 15,
    height: 35,
    '--webkit-border-radius': 20,
    '--moz-border-radius': 20,
    borderRadius: 20,
    background: '#000',
    width: 245,
    marginLeft: 'calc(50% - 100px)',
    fontFamily: 'sans-serif',
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const params = useLocation();
  const [isManifesto, setIsManifesto] = useState(false);

  useEffect(() => {
    if (params.pathname.includes('manifesto')) {
      setIsManifesto(true);
    }
  }, [params]);

  const toggleDrawer = (side: string, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = (side: string) => (
    <div
      className={classes.menu}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <CloseIcon
          classes={{ root: classes.closeIcon }}
          onClick={toggleDrawer('right', false)}
          style={{ fontSize: 30, float: 'right', marginRight: 16 }}
        />
        {!isManifesto && (
          <ListItem className={classes.menuItem} button>
            <ListItemText
              onClick={() => {
                history.push('/manifesto');
              }}
              classes={{
                primary: classes.font35,
              }}
              primary={'Manifesto'}
            />
          </ListItem>
        )}
        {isManifesto && (
          <ListItem className={classes.menuItem} button>
            <ListItemText
              onClick={() => {
                history.push('/');
              }}
              classes={{
                primary: classes.font35,
              }}
              primary={'Home'}
            />
          </ListItem>
        )}
        <ListItem className={classes.menuItem} button>
          <ListItemText
            onClick={() => {
              window.open(
                'https://www.notion.so/prysmxyz/Join-Us-on-Our-Mission-0c9a715bc3b64d56b5226b7c3e6b8d25',
              );
            }}
            classes={{
              primary: classes.font35,
            }}
            primary={'Careers'}
          />
        </ListItem>

        {/* <ListItem className={classes.menuItem} button>
          <ListItemText
            onClick={() => {
              window.open('https://twitter.com/prysm_xyz');
            }}
            classes={{
              primary: classes.font35,
            }}
            primary={'Launch App'}
          />
        </ListItem> */}
        <ListItem
          button
          onClick={() => {
            window.open('https://twitter.com/prysm_xyz');
          }}
        >
          <IconButton className={classes.mr} aria-label="twitter">
            <img src={Twitter} alt="Twitter" />
          </IconButton>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            window.open('https://discord.gg/p5SED4XbU6');
          }}
        >
          <IconButton className={classes.mr} aria-label="discord">
            <img src={Discord} alt="Discord" />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.app} position={'static'}>
          <Container>
            <img className={classes.logo} src={Logo} alt="logo" />
            <div className={classes.navRight}>
              <MenuIcon
                classes={{ root: classes.icon }}
                onClick={toggleDrawer('right', true)}
                style={{ fontSize: 30 }}
              />
              <Drawer
                open={open}
                anchor="right"
                onClose={toggleDrawer('right', false)}
                classes={{
                  paper: classes.navbar,
                }}
              >
                {list('right')}
              </Drawer>
            </div>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}

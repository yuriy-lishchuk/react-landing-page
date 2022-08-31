import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Card, Badge, Box } from '@material-ui/core';
import $ from 'jquery';

import Logo from 'assets/manifesto/p_mark.png';
import Prysm from 'assets/manifesto/prysm_large.png';
import { useCallback, useEffect, useState } from 'react';

const prysmLogoStyle = {
  width: 57,
  height: 55,
  marginTop: 7,
};

const prysmImgStyle = makeStyles<Theme, { blur: number }>((theme) => ({
  root: {
    width: '100%',
    padding: '0 30px',
    maxWidth: 1200,
    [theme.breakpoints.down('sm')]: {
      padding: '0 30px',
    },
    position: 'sticky',
    top: 100,
    zIndex: -3,
    filter: (props) => `blur(${props.blur}px)`,
  },
}));

const headerButtonStyles = makeStyles({
  root: {
    marginRight: 20,
    cursor: 'pointer',
  },
  main: {
    fontFamily: 'ABCMonumentGrotesk',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  customBadge: {
    border: 'solid 1px #9F9F9F',
    color: '#7000FF',
    marginTop: '-5px',
    fontFamily: 'sans-serif',
  },
  toolTip: {
    top: -15,
    left: -10,
    paddingBottom: 10,
    height: 18,
    lineHeight: 0,
    color: '#FFF',
    '--webkit-border-radius': 13,
    '--moz-border-radius': 13,
    borderRadius: 13,
    padding: 6,
    position: 'relative',
    backgroundColor: '#FF9365',
  },
  toolTipText: {
    fontSize: 10,
    marginTop: -4,
  },
});

const manifestoCard1Styles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: 'rgba(75, 75, 75, 0.6)',
    padding: 32,
    borderRadius: 24,
    width: '100%',
    maxWidth: 720,
    [theme.breakpoints.down('sm')]: {
      padding: 24,
      borderRadius: 12,
      maxWidth: 343,
    },
  },
  title: {
    width: '100%',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    textAlign: 'center',
    maxWidth: 525,
    fontFamily: 'ABCMonumentGrotesk',
    letterSpacing: '1px',
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      maxWidth: 327,
      lineHeight: '128%',
      fontWeight: 500,
      textAlign: 'left',
      padding: 0,
    },
  },
  description: {
    width: '100%',
    maxWidth: 656,
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '33px',
    margin: '17px 0',
    fontFamily: 'ABCMonumentGrotesk',
    [theme.breakpoints.down('sm')]: {
      fontSize: 17,
      maxWidth: 327,
      lineHeight: '24px',
      textAlign: 'left',
    },
  },
}));

const manifestoCard2Styles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '12px 0',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: 'rgba(75, 75, 75, 0.6)',
    borderRadius: 16,
    width: '100%',
    maxWidth: 318,
    padding: 24,
    letterSpacing: '1px',
    [theme.breakpoints.up('sm')]: {
      height: 252,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 343,
    },
  },
  title: {
    fontFamily: 'GT Flexa Standard Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '140%',
    textAlign: 'center',
    width: '100%',
    maxWidth: 270,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 295,
      padding: 0,
    },
  },
}));

export function PrysmLogo() {
  return (
    <a href="/">
      <img style={prysmLogoStyle} src={Logo} alt="logo" />
    </a>
  );
}

type HeaderButtonProps = {
  caption: string;
  toolTip?: string;
  link?: string;
};

export function HeaderButton({ caption, link, toolTip }: HeaderButtonProps) {
  const classes = headerButtonStyles();
  return (
    <Badge
      onClick={() => {
        if (link) window.open(link);
      }}
      className={classes.root}
      classes={{
        badge: classes.customBadge,
      }}
    >
      <Typography className={classes.main}>{caption}</Typography>
      {toolTip && (
        <Box className={classes.toolTip}>
          <Typography className={classes.toolTipText}>{toolTip}</Typography>
        </Box>
      )}
    </Badge>
  );
}

export function PrysmImg() {
  const [blur, setBlur] = useState(0);
  const classes = prysmImgStyle({
    blur,
  });

  const handleScroll = useCallback(() => {
    const distanceScrolled = $(window).scrollTop();
    // @ts-ignore
    const blurValue = distanceScrolled / 25;

    setBlur(blurValue);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <img className={classes.root} src={Prysm} alt={'Prysm'} />;
}

type ManifestoCard1Props = {
  title: string;
  subTitles?: string[];
};

export function ManifestoCard1({ title, subTitles }: ManifestoCard1Props) {
  const classes = manifestoCard1Styles();

  return (
    <div className={classes.root}>
      <Card className={classes.image}>
        <Typography className={classes.title}>{title}</Typography>
        {subTitles &&
          subTitles.map((text: string, index: number) => (
            <Typography
              className={classes.description}
              variant="body2"
              key={index}
            >
              {text}
            </Typography>
          ))}
      </Card>
    </div>
  );
}

type ManifestoCard2Props = {
  title: string;
};

export function ManifestoCard2({ title }: ManifestoCard2Props) {
  const classes = manifestoCard2Styles();
  return (
    <div className={classes.root}>
      <Card className={classes.image}>
        <Typography className={classes.title}>{title}</Typography>
      </Card>
    </div>
  );
}

import React from 'react';
import { Badge, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: 'pointer',
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
  main: {
    textTransform: 'none',
    color: theme.palette.text.primary,
    fontFamily: 'sans-serif',
  },
  customBadge: {
    border: 'solid 1px #9F9F9F',
    color: '#7000FF',
    marginTop: '-5px',
    fontFamily: 'sans-serif',
  },
  toolTip: {
    top: -15,
    paddingBottom: 10,
    height: 22,
    lineHeight: 0,
    color: '#000',
    '--webkit-border-radius': 13,
    '--moz-border-radius': 13,
    borderRadius: 13,
    padding: 6,
    position: 'relative',
  },
  toolTipText: {
    fontSize: 11,
    marginTop: -7,
  },
}));

type Props = {
  title: string;
  link: string;
  toolTip?: string;
  toolTipColor?: string;
  marginRight?: number;
  color?: string;
  newOpen?: boolean;
};

function ButtonNew(props: Props) {
  const classes = useStyles();
  const {
    title,
    color,
    link,
    toolTip,
    toolTipColor,
    marginRight,
    newOpen,
  } = props;
  const history = useHistory();
  return (
    <Badge
      onClick={() => {
        if (newOpen) window.open(link);
        else history.push(link);
      }}
      // badgeContent={''}
      className={classes.root}
      classes={{
        badge: classes.customBadge,
      }}
      style={marginRight ? { marginRight } : {}}
    >
      <Typography className={classes.main} style={{ color: color }}>
        {title}
      </Typography>
      {toolTip && toolTipColor ? (
        <Box
          className={classes.toolTip}
          style={{ backgroundColor: toolTipColor }}
        >
          <Typography className={classes.toolTipText}>{toolTip}</Typography>
        </Box>
      ) : null}
    </Badge>
  );
}

export default ButtonNew;

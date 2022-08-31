import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'transparent',
  },
  imageDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      marginBottom: 10,
      height: 140,
    },
  },
  img: {
    width: '100%',
    maxWidth: 350,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      marginBottom: 20,
    },
  },
  title: {
    fontSize: 27,
    fontStyle: 'normal',
    lineHeight: '45.6px',
    color: '#FFF',
  },
  description: {
    width: 275,
    margin: 'auto',
    marginTop: 20,
    paddingBottom: 5,
    color: '#FFF',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 0,
      paddingBottom: 35,
    },
  },
}));

type Props = {
  image: string;
  title: string;
  subTitle: string;
};

function ItemTrader({ image, title, subTitle }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageDiv}>
        <img src={image} alt="img" className={classes.img} />
      </div>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>
      <Typography className={classes.description} variant="body2">
        {subTitle}
      </Typography>
    </div>
  );
}

export default ItemTrader;

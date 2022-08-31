import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Polychain_Capital_Logo from '../../assets/Polychain_Capital_Logo.png';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		textAlign: 'center',
		marginTop: 82,
		marginBottom: 79,
	},
	mTop: {
		marginTop: 110,
		marginBottom: 15,
	},
	polychain: {
		width: '6vw',
		marginTop: '2vh',
		[theme.breakpoints.down('sm')]: {
			width: '25vw',
		},
		[theme.breakpoints.down('xs')]: {
			width: '35vw',
		},
	},
}));

function Community() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography className={classes.mTop} variant="h6">
				Incubated by
			</Typography>
			<img
				className={classes.polychain}
				src={Polychain_Capital_Logo}
				alt="Polychain_Capital_Logo"
			/>
		</div>
	);
}

export default Community;

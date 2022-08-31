import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ItemTrader from './ItemTrader';
import { itemTraders } from '../../utils/mock';
import useWindowDimensions from '../../utils/useWindowDimensions';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		minHeight: '100vh',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingBottom: 100,
		},
	},
	cards: {
		marginBottom: 100,
	},
	title: {
		color: '#D9C3FD',
		[theme.breakpoints.down('sm')]: {
			fontSize: 30,
		},
	},
	subTitle: {
		color: '#FFFFFF',
		[theme.breakpoints.down('sm')]: {
			fontSize: 35,
			lineHeight: '50px',
		},
	},
	fWidth: {
		width: '100%',
	},
}));

function Traders() {
	const classes = useStyles();
	const { height } = useWindowDimensions();
	const centeredTop = height / 5;

	return (
		<div className={classes.root} style={{ paddingTop: centeredTop }}>
			<Typography className={classes.title} variant="subtitle1">
				Traders
				</Typography>

			<Typography className={classes.subTitle} variant="subtitle2">
				Cut out the Noise
				</Typography>

			<Grid container className={classes.cards} spacing={2}>
				{itemTraders.map((item, index: number) => (
					<Grid className={classes.fWidth} item key={index} md={4}>
						<ItemTrader
							image={item.image}
							title={item.title}
							subTitle={item.subTitle}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default Traders;

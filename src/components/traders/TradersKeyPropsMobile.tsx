import React, { Fragment } from 'react';
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
		[theme.breakpoints.down('sm')]: {
			marginBottom: 0,
			paddingTop: 0,
		},
	},
	image: {
		width: '100%',
		paddingTop: 30,
		display: 'flex',
	},
	subTitle: {
		[theme.breakpoints.down('sm')]: {
			fontSize: 35,
			textAlign: 'center',
			marginBottom: 0,
			marginTop: 35,
		},
	},
}));

function TradersKeyPropsMobile() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item>
					{traderProps.map((item, index: number) => (
						<Fragment>
							<Typography className={classes.subTitle} variant="subtitle2">
								{item.title}
							</Typography>
							<img src={item.img} alt={`Trader Img ${index}`} className={classes.image} />
						</Fragment>
					))}
				</Grid>
			</Grid>
		</div>
	);
}

export default TradersKeyPropsMobile;

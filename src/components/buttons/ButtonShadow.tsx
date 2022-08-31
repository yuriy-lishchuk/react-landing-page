import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Arrow from '../../assets/arrow.svg';

type Props = {
	link: string;
	title: string;
	arrow: boolean;
	fontWeight: number;
	className?: string;
	preventDef?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		/** Override MUI styles */
		top: '40px',
		transition: 'none',
		color: '#000',

		/** Custom styles */
		fontSize: '24px',
		textTransform: 'none',
		background: '#FFFFFF',
		border: '2px solid #000000',
		boxSizing: 'border-box',
		'--webkit-border-radius': 24,
		'--moz-border-radius': 24,
		borderRadius: '24px',
		padding: '16px 40px',
		boxShadow: '10px 8px 0px #000',
		'&:hover': {
			backgroundColor: '#FFF',
			color: '#000',
			border: '2px solid #000000',
			boxSizing: 'border-box',
			'--webkit-border-radius': 24,
			'--moz-border-radius': 24,
			borderRadius: '24px',
			boxShadow: 'none',
			padding: '16px 40px',
			'--webkit-transform': 'translate(10px, 10px)',
			'--moz-transform': 'translate(10px, 10px)',
			'--ms-transform': 'translate(10px, 10px)',
			'--o-transform': 'translate(10px, 10px)',
			transform: 'translate(10px, 10px)',
			transition: 'transform 0.25s ease-in-out, box-shadow .25s',
		}
	},
	arrow: {
		width: 49,
		[theme.breakpoints.down('sm')]: {
			width: 35,
		},
	},
	underlineNone: {
		textDecoration: 'none',
	},
}));

function ButtonShadow(props: Props) {
	const classes = useStyles();

	return (
		<Button
			onClick={() => {
				return props.preventDef ? null : window.open(props.link);
			}}
			className={`${classes.root} ${props.className || ''}`}
			variant="outlined"
			color="primary"
			endIcon={
				props.arrow ? (
					<img src={Arrow} alt="arrow" className={classes.arrow} />
				) : null
			}
			style={{ fontWeight: props.fontWeight }}
		>
			{props.title}
		</Button>
	);
}

export default ButtonShadow;

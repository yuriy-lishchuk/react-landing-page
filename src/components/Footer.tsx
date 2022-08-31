import React from 'react';
import { Container, Grid, List, ListItemText } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import Logo from '../assets/Prysm.svg';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginTop: 70,
		marginBottom: 130,
		[theme.breakpoints.down('sm')]: {
			marginTop: 150,
		},
	},
	logo: {
		marginTop: 20,
		width: 50,
		[theme.breakpoints.down('sm')]: {
			float: 'right',
		},
	},
	dFlexRight: {
		display: 'flex',
		textAlign: 'right',
	},
	dFlexLeft: {
		display: 'flex',
		textAlign: 'left',
	},
	head: {
		fontSize: 18,
		fontWeight: 600,
		lineHeight: '44.91px',
	},
	head2: {
		fontSize: 24,
		fontWeight: 600,
	},
	link: {
		fontSize: 18,
	},
	mobileLeft: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'right',
		},
	},
}));

function Footer() {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Container>
			<Grid container className={classes.root}>
				<Grid item md={6} xs={12} className={classes.dFlexLeft}>
					<Grid container spacing={4}>
						<Grid item md={4} xs={12}>
							<img className={classes.logo} src={Logo} alt="logo" />
						</Grid>
						<Grid className={classes.mobileLeft} item md={4} xs={12}>
							<List>
								<ListItemText
									classes={{ primary: classes.head }}
									primary="Made By Refractor, Inc."
								/>
								<ListItemText
									onClick={() => {
										history.push('/termsAndConditions')
									}}
									style={{
										cursor: 'pointer',
									}}
									classes={{ primary: classes.link }}
									primary="Terms of Service"
								/>
								<ListItemText
									onClick={() => {
										history.push('/privacyPolicy');
									}}
									style={{
										cursor: 'pointer',
									}}
									classes={{ primary: classes.link }}
									primary="Privacy Policy"
								/>
							</List>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={6} xs={12} className={classes.dFlexRight}>
					<Grid container>
						<Grid item md={4} />
						<Grid item md={4} xs={12}>
							<List>
								<ListItemText
									classes={{ primary: classes.head2 }}
									primary="Company"
								/>
								<ListItemText
									onClick={() => {
										window.open(
											'https://www.notion.so/prysmxyz/About-Prysm-7dee6e075a9b4403938112b32affbd45',
										);
									}}
									style={{
										cursor: 'pointer',
									}}
									classes={{ primary: classes.link }}
									primary="About Us"
								/>
								<ListItemText
									onClick={() => {
										window.open(
											'https://www.notion.so/prysmxyz/Join-Us-on-Our-Mission-0c9a715bc3b64d56b5226b7c3e6b8d25',
										);
									}}
									style={{
										cursor: 'pointer',
									}}
									classes={{ primary: classes.link }}
									primary="Careers"
								/>
							</List>
						</Grid>
						<Grid item md={4} xs={12}>
							<List>
								<ListItemText
									classes={{ primary: classes.head2 }}
									primary="Connect"
								/>
								<ListItemText
									onClick={() => {
										window.open('https://twitter.com/prysm_xyz');
									}}
									style={{
										cursor: 'pointer',
									}}
									classes={{ primary: classes.link }}
									primary="Twitter"
								/>
								<ListItemText
									onClick={() => {
										window.open('https://discord.gg/p5SED4XbU6');
									}}
									style={{
										cursor: 'pointer',
									}}
									classes={{ primary: classes.link }}
									primary="Discord"
								/>
							</List>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Footer;

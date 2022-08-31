import ItemTrader_1 from '../assets/itemTrader1-small.png';
import ItemTrader_2 from '../assets/itemTrader2-small.png';
import ItemTrader_3 from '../assets/itemTrader3-small.png';

import Avatar_2 from '../assets/avatar_2.svg';
import Avatar_3_big from '../assets/avatar_3_big.svg';

import YoungCryptoWolf from '../assets/youngcryptowolf.png';
import SergeiChan from '../assets/sergei_chan.png';
import CarpeNoctom from '../assets/carepenoctom.png';

import BuyIndexFund from '../assets/BuyIndexFund-small.png';
import ExecuteTradeIdeas from '../assets/ExecuteTradeIdeas-small.png';
import UncoverConsensus from '../assets/UncoverConsensus-small.png';

export const itemTraders = [
	{
		id: 1,
		image: ItemTrader_2,
		title: 'Discover & Execute',
		subTitle: 'Discover hidden opportunities from top Traders and Execute on best pricing',
	},
	{
		id: 2,
		image: ItemTrader_1,
		title: 'Verify Track Record',
		subTitle: 'Use onchain transparency to verify that Creators put their money where their mouth is',
	},
	{
		id: 3,
		image: ItemTrader_3,
		title: 'Earn Reputation',
		subTitle: 'Earn Reputation for positive trades you make and spread so we can grow our collective edge',
	}
];

export const traderProps = [
	{
		id: 0,
		title: 'Execute Trade Ideas from top Traders',
		img: ExecuteTradeIdeas,
		background: 'rgba(97, 122, 255, 0.2)',
		marginTop: 50,
	}, {
		id: 1,
		title: 'Invest in funds alongside Social Traders',
		img: BuyIndexFund,
		background: 'rgba(255, 76, 0, 0.2)',
		marginTop: 0,
	}, {
		id: 2,
		title: 'Uncover the Consensus on a trending market',
		img: UncoverConsensus,
		background: 'rgba(97, 208, 255, 0.2)',
		marginTop: 150,
	},
];

export const cardTraders = [
	{
		id: 1,
		title: 'Execute Trade Ideas from top Creators',
		avatar: Avatar_3_big,
		name: '@youngcryptowolf',
		headTitle: 'End of bull cycle',
		kudos: 12,
		markTitle: 'LIMIT SELL',
		markColor: '#EF4821',
		buttonTitle: 'Copy',
		fund: '$1373.54',
		percentage: '3.2%',
		option: 1
	},
	{
		id: 2,
		title: 'Buy an Index Fund made by top Creators',
		avatar: Avatar_2,
		name: '@crabbylions',
		headTitle: 'Anton’s DeFi Bets',
		kudos: 16,
		markTitle: 'INDEX FUND',
		markColor: '#FFA63E',
		buttonTitle: 'Buy share',
		fund: '$0.22',
		percentage: '2.7%',
		option: 2
	},
	{
		id: 3,
		title: 'Uncover the consensus on a trending market',
	}
];

export const contentCreators = [
	{
		id: 1,
		description: 'Monetize your skills by sharing winning trade ideas and launching your own funds.'
	},
	{
		id: 2,
		description: 'Engage your community with unique experiences enabled by NFTs and social tokens.'
	},
	{
		id: 3,
		description: 'Earn subscription income from your most dedicated fans.'
	}
];

export const testimonials = [
	{
		id: 0,
		handle: 'youngcryptowolf',
		avatar: YoungCryptoWolf,
		testimonial: 'One of the beauties of Prysm is Traders are allowed to be transparent and rewarded for their work.',
	},
	{
		id: 1,
		handle: 'sergei_chan',
		avatar: SergeiChan,
		testimonial: 'Prysm is solving a burning monetization problem for Creators',
	},
	{
		id: 2,
		handle: 'CarpeNoctom',
		avatar: CarpeNoctom,
		testimonial: 'The transparency Prysm provides into my track record helps me not drown in the army of internet shills',
	},
];
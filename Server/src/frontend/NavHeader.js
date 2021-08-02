import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './frontendStore/actions/user';

const NavHeader = ({ route }) => {
	return (
		<div>
			<Header />
			{renderRoutes(route.routes)}
		</div>
	);
};

export default {
	component: NavHeader,
	loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};

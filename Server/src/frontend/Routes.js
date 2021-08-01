import React from 'react';
import NavHeader from './NavHeader';
import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';

export default [
	{
		...NavHeader,
		routes: [
			{ path: '/', ...HomePage, exact: true },
			{ path: '/users', ...UsersListPage, exact: true },
		],
	},
];

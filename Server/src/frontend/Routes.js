import React from 'react';
import NavHeader from './NavHeader';
import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';
import Notfound from './components/pages/Notfound';
Notfound;

export default [
	{
		...NavHeader,
		routes: [
			{ path: '/', ...HomePage, exact: true },
			{ path: '/users', ...UsersListPage, exact: true },
			{ ...Notfound },
		],
	},
];

import React from 'react';
import NavHeader from './NavHeader';
import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';
import Notfound from './components/pages/Notfound';
import AdminPage from './components/pages/AdminPage';

export default [
	{
		...NavHeader,
		routes: [
			{ path: '/', ...HomePage, exact: true },
			{ path: '/users', ...UsersListPage },
			{ path: '/admins', ...AdminPage },
			{ ...Notfound },
		],
	},
];

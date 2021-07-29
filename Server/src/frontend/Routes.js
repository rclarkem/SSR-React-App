import React from 'react';
import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';

export default [
	{ path: '/', ...HomePage, exact: true },
	{ path: '/users', ...UsersListPage, exact: true },
];

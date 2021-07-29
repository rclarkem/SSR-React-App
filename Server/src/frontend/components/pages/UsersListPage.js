import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, test } from '../../frontendStore/actions/user';

const UsersList = ({ fetchUsers, users }) => {
	useEffect(() => {
		fetchUsers();
	}, []);

	const mapUsers = () => {
		return users.map(({ name, id }, ind) => <li key={id}>{name}</li>);
	};

	return (
		<div>
			Here is a list of users:
			<ul>{mapUsers()}</ul>
		</div>
	);
};

const mapStateToProps = ({ users }) => {
	return {
		users: users,
	};
};

const loadData = (store) => {
	return store.dispatch(fetchUsers());
};

export default {
	loadData,
	component: connect(mapStateToProps, { fetchUsers })(UsersList),
};

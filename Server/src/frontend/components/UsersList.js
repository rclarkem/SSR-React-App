import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, test } from '../frontendStore/actions/user';
// import { useSelector, useDispatch } from 'react-redux';

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

export default connect(mapStateToProps, { fetchUsers })(UsersList);

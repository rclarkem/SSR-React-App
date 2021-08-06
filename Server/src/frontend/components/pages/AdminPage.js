import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../../frontendStore/actions/admins';
import requireAuth from '../hocs/requireAuth';

const AdminPage = ({ admins, fetchAdmins }) => {
	useEffect(() => {
		fetchAdmins();
	}, []);

	const renderAdmins = () => {
		return admins.map(({ id, name }) => <li key={id}>{name}</li>);
	};

	return (
		<div>
			<h3>Protected List of Admins</h3>
			<ul>{renderAdmins()}</ul>
		</div>
	);
};

const mapStateToProps = ({ admins }) => ({
	admins,
});

export default {
	component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminPage)),
	loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};

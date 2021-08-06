import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComp) => {
	const RequireAuth = (props) => {
		switch (props.auth) {
			case false:
				return <Redirect to='/' />;
			case null:
				return <div>Loading....</div>;
			default:
				return <ChildComp {...props} />;
		}
	};

	const mapStateToProps = ({ auth }) => ({
		auth,
	});

	return connect(mapStateToProps, null)(RequireAuth);
};

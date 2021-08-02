import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
	console.log('🚀 ~ file: Header.js ~ line 6 ~ Header ~ auth', auth);

	const authButt = auth ? (
		<a href='/api/logout'>Log Out</a>
	) : (
		<a href='/api/auth/google'>Login</a>
	);

	return (
		<div>
			<Link to='/'>React Test SSR</Link>
			<div>
				<Link to='/users'>Users</Link>
				<Link to='/admin'>Admin</Link>
				{authButt}
			</div>
		</div>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth: auth };
};

export default connect(mapStateToProps, null)(Header);

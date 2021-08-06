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
		<nav>
			<div className='nav-wrapper'>
				<Link to='/' className='brand-logo'>
					React Test SSR
				</Link>
				<ul className='right'>
					<li>
						<Link to='/users'>Users</Link>
					</li>
					<li>
						<Link to='/admins'>Admin</Link>
					</li>
					<li>{authButt}</li>
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth: auth };
};

export default connect(mapStateToProps, null)(Header);

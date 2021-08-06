import React from 'react';
import requireAuth from '../hocs/requireAuth';

const Home = () => {
	return (
		<div className='center-align' style={{ marginTop: '200px' }}>
			<h3>Welcome!</h3>
			<p>Check this out</p>
		</div>
	);
};

export default {
	component: requireAuth(Home),
};

import React from 'react';

const Notfound = ({ staticContext = {} }) => {
	staticContext.notfound = true;
	return (
		<div className='center-align' style={{ marginTop: '200px' }}>
			<h4> 404 | Page Not Found</h4>
		</div>
	);
};

export default {
	component: Notfound,
};

import React from 'react';

import './app-info.css';

const AppInfo = ({ employees, increased }) => {
	return (
		<div className="app-info">
			<h1>Employees accounting in 'Kekw LLC'</h1>
			<h2>Employees count: {employees}</h2>
			<h2>Bonus: {increased}</h2>
		</div>
	);
};

export default AppInfo;

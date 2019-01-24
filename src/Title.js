import React from 'react';

const Title = ({ title, something }) => {
	return (
		<div>
			<h1>
				{title}
			</h1>
			<p>
				{something}
			</p>
		</div>)
};

export default Title;
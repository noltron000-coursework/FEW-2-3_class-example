import React from 'react';

const ShowTime = ({ date }) => {
	const time = date.toLocaleString('en-US');
	return (<h1>{time}</h1>)
};

export default ShowTime;
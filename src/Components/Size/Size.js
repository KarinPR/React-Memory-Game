import React from 'react';
import PropTypes from 'prop-types'
import './Size.css'


const Size = ({ size , sizeClick}) => {
	// console.log(img)
	return (
		<div className = 'chooseboardsizeitem' id = {`choosesize${size}`} onClick = {() => sizeClick(size)}>{size}</div>
	);
}

export default Size;

Size.propTypes = {
	size : PropTypes.number.isRequired,
	sizeClick : PropTypes.func.isRequired,
}
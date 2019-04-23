import React from 'react';
import PropTypes from 'prop-types'
import './Theme.css'


const Theme = ({ theme , folder,  name,  themeClick}) => {
	// console.log(img)
	return (
		<div className = 'choosethemeitem' id = {theme} onClick = {() => themeClick(theme, folder)}>{name}</div>
	);
}

export default Theme;

Theme.propTypes = {
	theme : PropTypes.string.isRequired,
	name : PropTypes.string.isRequired,
	themeClick : PropTypes.func.isRequired,
}

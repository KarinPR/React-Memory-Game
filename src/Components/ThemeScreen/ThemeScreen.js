// import React, {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import Theme from '../Theme/Theme';
import './ThemeScreen.css'

const ThemeScreen = ({ themes, themeClick}) => {
	return (
		<div className = 'choosethememaindiv' >
			<div className = "choosethemetitletext" >Choose Theme</div>
			<div className = ' choosethemediv ' >
				{
					themes.map( (theme) => {
						return (
							<Theme
								key = {theme.id}
								theme = {theme.id} 
								name = {theme.name}
								folder = {theme.folder.toString()}
								themeClick = {themeClick}
							/>
						);
					})	
				}
			</div>
		</div>
	);
}

export default ThemeScreen;

ThemeScreen.propTypes = {
	// themes : PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	themeClick : PropTypes.func.isRequired,
}

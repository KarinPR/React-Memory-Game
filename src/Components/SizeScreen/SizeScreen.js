// import React, {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import Size from '../Size/Size';
import './SizeScreen.css'

const SizeScreen = ({ title , sizes, sizeClick}) => {
	return (
		<div className = 'chooseboardsizemaindiv' >
			<div className = "chooseboardsizetitletext" > {title} </div>
			<div className = ' chooseboardsizediv ' >
				{
					sizes.map( (size) => {
						return (
							<Size
								key = {size.size}
								size = {size.size} 
								sizeClick = {sizeClick}
							/>
						);
					})	
				}
			</div>
		</div>
	);
}

export default SizeScreen;

SizeScreen.propTypes = {
	sizes :  PropTypes.oneOfType([
		PropTypes.string, PropTypes.number,
		PropTypes.arrayOf(PropTypes.shape({}))
	]).isRequired,
	sizeClick : PropTypes.func.isRequired,
}

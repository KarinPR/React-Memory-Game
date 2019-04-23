import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'
// import frontImage from './front_img.jpg'
// import { lilsisarray } from './themes/lil_sis/lil_sis.js'
			// <CardBack image = {img}/> 

const Card = ({ id , img , folder, isFlipped, isMatched, cardClick, disabled}) => {
	// console.log(img)
	return (
		<div className = {`flip-container ${isFlipped || isMatched ? 'flipper' : ''}`} onClick = { disabled ? null : () => cardClick(id)} >
			<div className = ' card card8 flipper' >
				<img className = {isFlipped || isMatched ? 'front front8' : 'back back8'} alt = {id} src = {isFlipped || isMatched ?  `themes/${folder}/${img}.jpg` : `themes/back_img/front_img.jpg` } height="100px" width="100px"/>
			</div>
		</div>
	);
}

export default Card;

Card.propTypes = {
	id : PropTypes.number.isRequired,
	img : PropTypes.string.isRequired,
	folder : PropTypes.string.isRequired,
	isFlipped : PropTypes.bool.isRequired,
	isMatched : PropTypes.bool.isRequired,
	cardClick : PropTypes.func.isRequired,
	disabled : PropTypes.bool.isRequired,
}

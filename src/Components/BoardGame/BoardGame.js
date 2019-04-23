// import React, {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import Card from '../Card/Card';
import './BoardGame.css'

const BoardGame = ({ cards, size, folder, isFlipped, isMatched, cardClick, disabled}) => {
	return (
		<div className = {`board-container match-container match-container${size} `} >
			{
				cards.map( (card , index) => {
					return (
						<Card
							key = {index}
							id = {card.id} 
							img = {card.img}
							folder = {folder}
							isFlipped = {isFlipped.includes(card.id)}
							isMatched = {isMatched.includes(card.id)} 
							cardClick = {cardClick}
							disabled = {disabled || isMatched.includes(card.id)} 
						/>
					);
				})	
			}
		</div>
	);
}

export default BoardGame;

BoardGame.propTypes = {
	cards : PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	size : PropTypes.oneOfType([
		PropTypes.string, PropTypes.number,
		PropTypes.arrayOf(PropTypes.shape({}))
	]).isRequired,
	folder : PropTypes.string.isRequired,
	isFlipped : PropTypes.arrayOf(PropTypes.number).isRequired,
	isMatched : PropTypes.arrayOf(PropTypes.number).isRequired,
	cardClick : PropTypes.func.isRequired,
	disabled : PropTypes.bool.isRequired
}

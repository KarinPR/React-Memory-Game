import React from 'react';
import PropTypes from 'prop-types'
import './WinScreen.css'

const WinScreen = ({time , clear,  moves , highscoreslogan , winnerslogan}) => {
	return (
		<div className = 'winoverlay'>
			<div className = 'box'>
				<h1 className = 'winnerslogan'> {winnerslogan} </h1>
				<p>It took <span> {time} seconds </span>  and  
				<span> {moves} moves </span> to solve this memory.</p>
				<p> <span> {highscoreslogan} </span> </p>
				<button className = 'red' onClick = {clear} > Try again ? </button>
			</div>
		</div>
	);
}

export default WinScreen;

WinScreen.propTypes = {
	time : PropTypes.number.isRequired,
	clear : PropTypes.func.isRequired,
	moves : PropTypes.number.isRequired,
	highscoreslogan : PropTypes.string.isRequired,
	winnerslogan :PropTypes.string.isRequired
}
import React from 'react';
import PropTypes from 'prop-types'
import './Player.css'

const Player = ({name , moves, pairs}) => {
	return (
		<div className ="playerscorediv" id="playerscorediv1">
			<div className ="playerscoretext"> {name} </div> 
			<div className ="scoreboard">
				<div> moves </div> 
				<div id ="playeronescore"> {moves} </div>
				<div className ="matchedpairstext">Pairs</div>
				<div id = "playeronepairs"> {pairs} </div>
			</div>	 
		</div>
	);
}

export default Player;

Player.propTypes = {
	name : PropTypes.string.isRequired,
	moves : PropTypes.number.isRequired,
	pairs : PropTypes.number.isRequired
}
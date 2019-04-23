// import React, {useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types'
import Player from '../Player/Player';
// import './BoardGame.css'

const PlayerBoard = ({ players }) => {
	return (
		players.map( (player) => {
			return (
				<div className = {`${player.divName}-container`} key = {player.id} > 
					<Player	 
						name = {player.name} 
						moves = {player.pmoves} 
						pairs = {player.ppairs}
					/>
				</div>
			);
		})	
	);
}

export default PlayerBoard;

PlayerBoard.propTypes = {
	players : PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

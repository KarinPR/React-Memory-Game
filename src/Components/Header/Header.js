import React from 'react';
import PropTypes from 'prop-types'
import ToggleDisplay from 'react-toggle-display';
import './Header.css'

const Header = ({time, moves, playerName, highscore, clear, rulesClick , showRules}) => {
	return (
		<div  className = 'header-container' id = "uppernavbar">
			<ul>
		      <li> time : <span className= "time"> {time} </span> </li>
		      <li> moves : <span className="moves"> {moves} </span> highscore : <span className="highscore">{highscore}</span></li>
		      <li><i className="fas fa-redo-alt redo" onClick = {clear}></i></li>
		      <li><i className="fas fa-question question" onClick = {rulesClick}></i></li>
		    </ul>
			<div id="currentplayerdiv">
				<h1 id="currentlyplayertitle">Current Player :</h1>
				<h1 id="currentplayer">{playerName}</h1>
			</div>
			<ToggleDisplay if = {showRules} tag = 'section'>
				<div className="about">
					<i className="far fa-arrow-alt-circle-left arrow" onClick = {rulesClick} ></i>
					<h1>Rules</h1>

					<p> <strong>First</strong>, choose <strong>Theme</strong>. </p>
					<p> <strong>Second</strong>, choose <strong>number of players</strong>. </p>
					<p> <strong>Finally</strong>, choose <strong>Board size</strong>. </p>
					<p> Turn two cards, if you guessed <strong>CORRECTLY</strong> they will stay turned, and you get to <strong>PLAY AGAIN</strong>.</p>
					<p> <strong>IF NOT</strong> they will flip back and the turn goes to the <strong>OTHER PLAYER</strong>. </p>
					<p> Your moves to solve this memory will be <strong>counted and stored</strong>.</p> 
					<p> So you can <strong>challenge yourself</strong> into beating your freinds and the highscore with less moves!</p>
					<p> <strong> Enjoy!!!</strong></p>
					<hr/>
					<h1>About</h1>
					<p>This is a little "Birthday Present" for my dauther and a project I made for the <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noopener noreferrer">Udemy course</a></p>
					<p>You can find my repository here:  <a href="https://github.com/KarinPR/React-Memory_Game.git" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a></p>
					<hr/>
					<p>
					<i className="far fa-copyright"> Karin Povolozki-Rabichev, Israel</i>
					<br/>
					<br/>
					<i className = 'rights'> <strong> All picutres used in this project originate from the internet and are property <br/>of their respective owners, No Copyright infringement intended.</strong> </i>
					</p>
				</div>
			</ToggleDisplay>
		</div>
	);
}

export default Header;

Header.propTypes = {
	time : PropTypes.number.isRequired,
	moves : PropTypes.number.isRequired,
	// playerName : PropTypes.string.isRequired,
	highscore : PropTypes.oneOfType([
		PropTypes.string, PropTypes.number
		]).isRequired,
	clear : PropTypes.func.isRequired,
	rulesClick : PropTypes.func.isRequired,
	showRules : PropTypes.bool.isRequired
}
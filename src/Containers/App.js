import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import { Themes } from '../Components/ThemeScreen/Themes'
import { Sizes } from '../Components/SizeScreen/Sizes'
import Header from '../Components/Header/Header';
import ThemeScreen from '../Components/ThemeScreen/ThemeScreen';
import SizeScreen from '../Components/SizeScreen/SizeScreen';
import BoardGame from '../Components/BoardGame/BoardGame';
import WinScreen from '../Components/WinScreen/WinScreen';
import PlayerBoard from '../Components/PlayerBoard/PlayerBoard';
import CardDeck from './CardDeck'
import { PlayersList } from './PlayersList'
import './App.css';

class App extends Component {
	constructor (props) {
    super(props)
	    this.state = {
	      cards: [] ,
	      themes : Themes ,
	      activeFolder : '',
	      sizes : Sizes ,
	      flipped : [] ,
	      matched : [] ,
	      pairsFound : 0 ,
	      showTheme : true ,
  	      showPlayers : false ,
	      showSize : false ,
	      showBoard : false ,
	      showRules : false ,
	      players : [],
	      playersNum : [{ size : 1 } , { size : 2 }] ,
	      player : [],
	      moves : 0 ,
	      highscore : this.retrieveHighscore || 0 ,
	      highscoreSlogan : '',
	      winnerSlogan : '',
	      seconds : 0,
	      disabled : false
	    };
	}

	componentDidMount() {
		this.setState({player : PlayersList[0]})
	}
	componentDidUpdate (prevState, prevProp ) {
		if (this.state.cards.length !== prevProp.cards.length) {
			this.preLoadImages()
		}
	}
	componentWillUnmount() {
 	}
	
	nextPlayer = () => {
		if (this.state.player.id === 1 ) {
			this.setState({player : PlayersList[1] })
			console.log(this.state.player.name)
		} else {
			this.setState({player : PlayersList[0] })
			console.log(this.state.player.name)
		}
	}
	onClickTheme = (theme , folder) => {
      this.setState({ 
			themes : theme , 
			activeFolder : folder , 
			showTheme : !this.state.showTheme , 
			showPlayers : !this.state.showPlayers 
		})
  	}
	onClickPlayers = (num) => {
		if (num === 1) {
			this.setState({
				players : [PlayersList[0]] ,
				showPlayers : !this.state.showPlayers , 
				showSize : !this.state.showSize
			})
			console.log(PlayersList.length)
		} else if ( num === 2) {
			this.setState ({
				players : PlayersList , 
				showPlayers : !this.state.showPlayers , 
				showSize : !this.state.showSize
			})
			console.log(PlayersList.length)
		}
	}
  	onClickSize = (size) => {
  		this.setState({ 
				sizes : size , 
				cards : CardDeck(this.state.themes, size), 
				showSize : !this.state.showSize , 
				showBoard : !this.state.showBoard 
			})	
		this.startClock = setInterval((() => this.timming()),1000)
  	}
	onClickCard = (id) => {
		this.setState({disabled : true})
		if (this.state.flipped.length === 0) {
	    	this.setState({flipped : [id] , moves : this.state.moves + 1})
	    	this.setState(Object.assign(this.state.player,{pmoves:this.state.player.pmoves + 1}));
	    	// console.log(this.state.player.pmoves)
			this.setState({disabled : false})
		} else {
			this.setState({disabled : false})
			if (this.sameCard(id)) return;
			this.setState({flipped : [this.state.flipped[0] , id]})
			if (this.isMatch(id)) {
				this.setState({matched : [...this.state.matched , this.state.flipped[0] , id]})
				this.setState(Object.assign(this.state.player,{ppairs:this.state.player.ppairs + 1}));
				this.resetBoard()
			} else {
				this.setState({disabled : true})
				if (this.state.players.length === 2) {
					this.nextPlayer()
				}
				setTimeout(() => this.resetBoard(), 800);
			}
		}
	}
	onClickRules = () => {
		this.setState({ showRules : !this.state.showRules })
		console.log('click')
	}
	onClickClear = () => {
		window.location.reload()
	}
	resetBoard = () => {
		this.setState({flipped : []})
		this.setState({disabled : false})
		if ((this.state.matched.length + 2 ) === this.state.sizes) {
			this.gameEnd()
		}
	}
	sameCard = (id) => this.state.flipped.includes(id)
	isMatch = (id) => {
		const secondcard = this.state.cards.find(card => card.id === id)
		const firstcard = this.state.cards.find(card => this.state.flipped[0] === card.id)
		return (firstcard.img.toLowerCase() === secondcard.img.toLowerCase())
	}
	preLoadImages = () => {
		this.state.cards.map((card) =>{
			const src = `themes/${this.state.activeFolder}/${card.img}.jpg , themes/back_img/front_img.jpg `
			console.log(src)
			return new Image().src = src
		})
	}
  	timming = () => {
		this.setState({seconds : this.state.seconds + 1 })
	}

	retrieveHighscore = localStorage.getItem('highscore')
	
	setHighscoreCache = (moves) =>  {
		this.setState({ highscore : Number(moves)})
			if (!this.retrieveHighscore || this.state.highscore === 0) {
			console.log('hi')
	    	localStorage.setItem('highscore', JSON.stringify(this.state.highscore));
		}
  	}
	
	gameEnd = () => {
		const {highscore , moves } = this.state
		clearInterval(this.startClock)
		if (this.state.players.length === 2) {
			if (PlayersList[0].ppairs > PlayersList[1].ppairs) {
				this.setState({winnerSlogan : `Player 1 WINS by ${PlayersList[0].pmoves} moves`});
			} else if (PlayersList[0].ppairs === PlayersList[1].ppairs) {
				this.setState({winnerSlogan : `You both WINNERS`});
			} else if (PlayersList[0].ppairs < PlayersList[1].ppairs) {
				this.setState({winnerSlogan : `Player 2 WINS by ${PlayersList[1].pmoves} moves`});
			}
		} else {
			this.setState({winnerSlogan : `GOOD GAME!!!`});
		}
		
		if (highscore !== 0) {
			this.setState({ highscore : JSON.parse(this.retrieveHighscore).moves})
			if (highscore > moves) {
      			this.setState({ highscoreSlogan : `Your current highscore is ${highscore} moves - try again to beat it.` })
    		} else if (highscore === moves) {
    			this.setState({ highscoreSlogan : `That was close, just one move less for a new highscore! Your highscore is still ${highscore} moves.` })
    		} else if (highscore < moves) {
    			this.setState({ highscoreSlogan : `Congratulations, you beat your highscore! Your new highscore is ${moves} moves.` })
      			this.setHighscoreCache(moves)
			}	 
		} else {
			this.setHighscoreCache(moves)
			this.setState({ highscoreSlogan : `You finished your first game! Your new highscore is ${moves} moves.` })
		}
	}

	render() {
		const {cards, themes, seconds,  moves, highscore, player, players, playersNum, highscoreSlogan, winnerSlogan, activeFolder, sizes, flipped, matched, disabled} = this.state	
		return (
				<div className = 'body-container'>
					<Header rulesClick = {this.onClickRules} showRules = {this.state.showRules} time = {seconds} moves = {moves} playerName = {player.name} highscore = {highscore} clear = {this.onClickClear}/>
					<ToggleDisplay if = {this.state.showTheme} tag = 'section'>
						<ThemeScreen  className = 'themescreen' themes = {themes} themeClick = {this.onClickTheme}/>
					</ToggleDisplay>
					<ToggleDisplay if = {this.state.showPlayers} tag = 'section'>
						<SizeScreen  className = 'playersscreen' title = {'Choose Players'} sizes = {playersNum} sizeClick = {this.onClickPlayers}/>
					</ToggleDisplay>
					<ToggleDisplay if = {this.state.showSize} tag = 'section'>
						<SizeScreen  className = 'sizescreen' title = {'Choose Size'} sizes = {sizes} sizeClick = {this.onClickSize}/>
					</ToggleDisplay>
					<ToggleDisplay if = {this.state.showBoard} tag = 'section'>
					<div className = 'game-container'>
						<PlayerBoard players = {players}/>
						<BoardGame
							cards = {cards}
							size = {sizes}
							folder = {activeFolder}
							isFlipped = {flipped}
							isMatched = {matched} 
							cardClick = {this.onClickCard}
							disabled = {disabled} 
						/>
				    </div>
				    </ToggleDisplay>
				    <ToggleDisplay if = {matched.length === sizes} tag = 'section'>
					    <WinScreen time = {seconds} moves = {moves} highscoreslogan = {highscoreSlogan} winnerslogan = {winnerSlogan} clear = {this.onClickClear}/>
				    </ToggleDisplay>   
				</div>
			);
	}
}
export default App;


import {sampleSize , shuffle} from 'lodash';
import PropTypes from 'prop-types'

const CardDeck = (themeArr, num) => {
	let id = 0
	let imgArr = []
	if (themeArr === 'lilsisdiv') {
		imgArr = [ 'lil_80s_bb','lil_babeinthewoods', 'lil_bigcityBB', 'lil_luxe', 'lil_roller', 'lil_scribbles', 'lil_shimonequeen','lil_sk8erboi', 'lil_asifbaby', 'lil_babycartoon', 'lil_dawn','lil_kansasQT', 'lil_kittyqueen','lil_missjive', 'lil_splatters' , 'lil_yangQT' ];
	} else if (themeArr === 'bigsisdiv') {
		imgArr = ['big_hoops', 'bigsis_babyglam', 'bigsis_ballerina' , 'bigsis_brrr_bb_glam_glitter' , 'bigsis_cards' , 'bigsis_confetti' , 'bigsis_curious_qt_glam_glitter' , 'bigsis_dj_glam_glitter', 'bigsis_dusti', 'bigsis_fancygirl', 'bigsis_ironOntransfer' , 'bigsis_kitty_queen_glam_glitter' , 'bigsis_Lotta' , 'bigsis_Luxe' , 'bigsis_mermaid' , 'bigsis_sleeping'];
	} else if (themeArr === 'petsdiv') {
		imgArr = ['pets_4funkykat', 'pets_4showpony' , 'pets_babydog' , 'pets_bonbonham' , 'pets_crystalbunny' , 'pets_divacolor' , 'pets_djk9' , 'pets_fuzzyfan' , 'pets_googoomewmew' , 'pets_headphones', 'pets_hophop' , 'pets_hopskittea' , 'pets_mchammy' , 'pets_mermaid' , 'pets_purrrbaby' , 'pets_shortstophop'];
	}
	const randArr = sampleSize(imgArr, num/2);
	const cards = randArr.reduce ((acc, curCard , index) => {
   		acc.push({
   			id : id++,
	   		img : curCard
   		})
   		acc.push({
   			id : id++,
	   		img : curCard
   		})
	   	return acc;
   },[])
   return shuffle(cards);
}
export default CardDeck;

CardDeck.propTypes = {
	num : PropTypes.number.isRequired,
}
import './Card.scss'

import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { engagePokemon, disengagePokemon } from './../redux/userSlice';

const Card = ({pokemon, id}) => {

	const dispatch = useDispatch();

	const getStatColor = (stat) => {
		const value = stat.base_stat;
		if (value <= 50) {
			return 'red';
		} else if (value > 50 && value <= 100) {
			return 'orange';
		} else {
			return 'green';
		}
	}

	const engagedPokemon = useSelector(state => state.user.engagedPokemon);

	const togglePokemon = () => {
		const index = engagedPokemon.findIndex(pokemon => pokemon.id === id);
		if (index === -1) {
			dispatch(engagePokemon(pokemon));
		} else {
			dispatch(disengagePokemon(id));
		}
	}

	const cardClasses = classNames({
		card: true,
		engaged: engagedPokemon.findIndex(pokemon => pokemon.id === id) > -1
	});

	return (
		<div className={cardClasses} style={{backgroundColor: getStatColor(pokemon.stats[0])}} onClick={togglePokemon}>
			<h2>{pokemon.name}</h2>
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			<p>Weight: {pokemon.weight}</p>
			<p>Height: {pokemon.height}</p>
		</div>
	)
}

export default Card
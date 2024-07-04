import { useState, useEffect, useContext } from 'react'
import { SelectedPokemonContext } from './../stores/SelectedPokemonContext';
import './Card.scss'
import classNames from 'classnames';

const Card = ({pokemon, id}) => {
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
	const {selectedPokemon, setSelectedPokemon} = useContext(SelectedPokemonContext);

	const togglePokemon = () => {
		setSelectedPokemon([].concat(id));
	}

	const cardClasses = classNames({
		card: true,
		selected: selectedPokemon.includes(id)
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
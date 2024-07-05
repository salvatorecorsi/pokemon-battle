import './Battle.scss';
import { useState, useEffect, useReducer, useContext } from 'react'

import { useSelector } from 'react-redux';
import Pokemon from './../components/Pokemon';

function Battle() {

	// get random pokemons from pokemonList

	const engagedPokemon = useSelector(state => state.user.engagedPokemon);
	const pokemonList = useSelector(state => state.pokemonList.value);

	const chooseRandomPokemon = () => {
		const randomPokemon = [];
		for (let i = 0; i < engagedPokemon.length; i++) {
			const randomIndex = Math.floor(Math.random() * pokemonList.length);
			randomPokemon.push(pokemonList[randomIndex]);
		}
		return randomPokemon;
	}

	console.log(chooseRandomPokemon());

	return (
		<>
			<div className="battle">
				{engagedPokemon.map((pokemon, index) => {
					return (
						<Pokemon key={index} pokemon={pokemon} />
					)
				})}
			</div>
		</>
	)
}

export default Battle;
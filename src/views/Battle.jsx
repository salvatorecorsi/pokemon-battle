import { useState, useEffect, useReducer, useContext } from 'react'

import { useSelector } from 'react-redux';
import Card from './../components/Card';

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
	console.log(engagedPokemon);

	return (
		<>
			<div className="cards">
				{engagedPokemon.map((pokemon, index) => (
					<Card pokemon={pokemon} id={index} key={index} />
				))}
			</div>
			vs
			<div className="cards">
				{chooseRandomPokemon().map((pokemon, index) => (
					<Card pokemon={pokemon} id={index} key={index} />
				))}
			</div>
		</>
	)
}

export default Battle;
import { useState, useEffect, useReducer, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function App() {

	const pokemonList = useSelector(state => state.pokemonList);
	console.log(pokemonList)
	
	useEffect(() => {
		const fetchData = async () => {
			const getPokemonData = async (url) => {
				const response = await axios.get(url);
				return response.data;
			};

			const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}&offset=${offsetPokemon}`);
			const data = response.data.results;
			
			data.forEach(async (pokemon) => {
				const pokemonData = await getPokemonData(pokemon.url);
				setPokemonList((prev) => [...prev, pokemonData]);
			});
		}
		fetchData();

	}, []);

	return (
		<>
			
		</>
	)

}

export default App

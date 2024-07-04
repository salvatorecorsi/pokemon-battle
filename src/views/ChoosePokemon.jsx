import { useState, useEffect, useReducer, useContext } from 'react'
import { SelectedPokemonContext } from './../stores/SelectedPokemonContext';
import Card from './../components/Card'
import './ChoosePokemon.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ChoosePokemon() {
	const numberOfPokemon = 10;
	const offsetPokemon = 50;
	const [selectedPokemon, setSelectedPokemon] = useState([]);

	const startFight = () => {
		// go to battle view using id as parameter, using the router
	};

	return (
		<>
			<SelectedPokemonContext.Provider value={{selectedPokemon, setSelectedPokemon}}>
				<div className="cards">
					{pokemonList.map((pokemon, index) => (
						<Card pokemon={pokemon} id={index} key={index} />
					))}
				</div>
			</SelectedPokemonContext.Provider>
			<Link to={'/battle'}><button className="startfight" onClick={startFight}>Fight</button></Link>
		</>
	)
}

export default ChoosePokemon;
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setPokemonList } from './redux/pokemonListSlice'

function App() {

	const options = {
		numberOfPokemon: 10,
		offsetPokemon: 0
	}
	const pokemonList = useSelector(state => state.pokemonList.value);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	useEffect(() => {
		const fetchData = async () => {

			const getPokemonData = async (url) => {
				const response = await axios.get(url);
				return response.data;
			};

			const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${options.numberOfPokemon}&offset=${options.offsetPokemon}`);
			const data = response.data.results;
			
			const pokemonData = await Promise.all(data.map(async pokemon => {
				return await getPokemonData(pokemon.url);
			}));

			dispatch(setPokemonList(pokemonData));

		}
		fetchData();

	}, []);

	useEffect(() => {
		if (pokemonList.length > 0) {
			navigate('/choose-pokemon');
		}

	}, [pokemonList]);

	return (
		<>
			Caricamento...
		</>
	)

}

export default App

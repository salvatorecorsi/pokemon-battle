import './ChoosePokemon.scss'
import Card from './../components/Card'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ChoosePokemon() {
	const pokemonList = useSelector(state => state.pokemonList.value);
	const navigate = useNavigate();
	
	if (pokemonList.length === 0) {
		navigate('/');
	}

	return (
		<>
			<div className="cards">
				{pokemonList.map((pokemon, index) => (
					<Card pokemon={pokemon} id={index} key={index} />
				))}
			</div>
			<Link to={'/battle'}><button className="startfight" onClick={navigate('/battle')}>Fight</button></Link>
		</>
	)
}

export default ChoosePokemon;
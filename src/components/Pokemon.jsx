import './Card.scss'

import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { engagePokemon, disengagePokemon } from './../redux/userSlice';

const Pokemon = ({pokemon, id}) => {

	const dispatch = useDispatch();
    const pokemonClasses = classNames({
        status: true,
		pokemon: true,
    });

	return (
		<div className={pokemonClasses}>
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
		</div>
	)
}

export default Pokemon
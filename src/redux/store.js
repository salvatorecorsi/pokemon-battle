import { configureStore } from '@reduxjs/toolkit';
import {pokemonListReducer} from './pokemonListSlice';
import {userReducer} from './userSlice';

export default configureStore({
	reducer: {
		pokemonList: pokemonListReducer,
		user: userReducer,
	},
});
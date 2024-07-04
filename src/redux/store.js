import { configureStore } from '@reduxjs/toolkit';
import pokemonListSlice from '../stores/pokemonListSlice';

export const store = configureStore({
	reducer: {
		pokemonList: pokemonListSlice,
	},
});
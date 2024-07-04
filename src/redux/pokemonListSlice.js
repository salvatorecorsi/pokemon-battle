import { createSlice } from '@reduxjs/toolkit';

export const pokemonListSlice = createSlice({
	name: 'pokemonList',
	initialState: {
		value: [],
	},
	reducers: {
		setPokemonList: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const {setPokemonList} = pokemonListSlice.actions;
export const pokemonListReducer = pokemonListSlice.reducer;
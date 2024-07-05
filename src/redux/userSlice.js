import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		pokedex: [],
		engagedPokemon: []
	},
	reducers: {
		clearPokedex: (state) => {
			state.value = [];
		},
		addToPokedex: (state, action) => {
			state.value.push(action.payload);
		},
		removeFromPokedex: (state, action) => {
			state.value = state.value.filter((pokemon) => pokemon.id !== action.payload);
		},
		engagePokemon: (state, action) => {
			state.engagedPokemon.push(action.payload);
		},
		disengagePokemon: (state, action) => {
			state.engagedPokemon = state.engagedPokemon.filter((pokemon) => pokemon.id !== action.payload);
		},
		clearEngagedPokemon: (state) => {
			state.engagedPokemon = [];
		},
	},
});

export const { clearPokedex, addToPokedex, removeFromPokedex, engagePokemon, disengagePokemon, clearEngagedPokemon } = userSlice.actions;
export const userReducer = userSlice.reducer;
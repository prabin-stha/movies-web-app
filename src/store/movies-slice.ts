import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import MotionPicture from '../model/MotionPicture';

const initialState: {
	popularMovies: MotionPicture[][];
	popularTvShows: MotionPicture[][];
} = {
	popularMovies: [],
	popularTvShows: [],
};

const arrayContainsElement = 6;

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMoviesAndTvShows(
			state,
			action: PayloadAction<{
				movies: MotionPicture[];
				tvShows: MotionPicture[];
			}>
		) {
			for (
				let i = 0;
				i < action.payload.movies.length;
				i + arrayContainsElement
			) {
				state.popularMovies = state.popularMovies.concat([
					action.payload.movies.splice(0, arrayContainsElement),
				]);
			}
			for (
				let i = 0;
				i < action.payload.tvShows.length;
				i + arrayContainsElement
			) {
				state.popularTvShows = state.popularTvShows.concat([
					action.payload.tvShows.splice(0, arrayContainsElement),
				]);
			}
		},
	},
});

export const moviesSliceAction = moviesSlice.actions;
export default moviesSlice.reducer;

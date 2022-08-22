import { Dispatch } from '@reduxjs/toolkit';
import MotionPicture from '../model/MotionPicture';
import { moviesSliceAction } from './movies-slice';
import { uiSliceActions } from './ui-slice';

const key = 'ab2ea070f9aa3c1aa576539e31964dd5';
const baseAddress = 'https://api.themoviedb.org/';
const urlTrending = `${baseAddress}3/trending/all/day?api_key=${key}`;

const fetchMoviesTvShows = () => {
	return async (dispatch: Dispatch) => {
		dispatch(uiSliceActions.updateLoadingStatus(true));
		dispatch(
			uiSliceActions.updateRequestStatus({
				status: 'Pending...',
				message: 'Fetching Data.',
			})
		);

		const fetchData = async () => {
			const response = await fetch(urlTrending);
			if (!response.ok) throw new Error('Error Fetching Data!');
			const { results: data } = await response.json();

			const movies = data
				.filter((el: any) => el.media_type === 'movie')
				.map(
					(el: any) =>
						new MotionPicture(
							el.id,
							el.title,
							el.release_date,
							el.poster_path,
							el.vote_average
						)
				);
			const tvShows = data
				.filter((el: any) => el.media_type === 'tv')
				.map(
					(el: any) =>
						new MotionPicture(
							el.id,
							el.name,
							el.first_air_date,
							el.poster_path,
							el.vote_average
						)
				);
			return { movies, tvShows };
		};

		try {
			const data = await fetchData();
			dispatch(moviesSliceAction.addMoviesAndTvShows(data));
			dispatch(uiSliceActions.updateLoadingStatus(false));
			dispatch(
				uiSliceActions.updateRequestStatus({
					status: 'Success',
					message: 'Data Fetched Sucessfully.',
				})
			);
		} catch {
			dispatch(uiSliceActions.updateLoadingStatus(false));
			dispatch(
				uiSliceActions.updateRequestStatus({
					status: 'Error',
					message: 'Error Fetching Data!',
				})
			);
		}
	};
};

export default fetchMoviesTvShows;

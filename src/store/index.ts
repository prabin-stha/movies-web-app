import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './movies-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: { movie: moviesSlice, ui: uiSlice },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

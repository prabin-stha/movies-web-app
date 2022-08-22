import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
	status: { status: string; message: string };
	isLoading: boolean;
	isSetOnStreaming: boolean;
} = {
	status: { status: '', message: '' },
	isLoading: false,
	isSetOnStreaming: true,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		updateRequestStatus(
			state,
			action: PayloadAction<{ status: string; message: string }>
		) {
			state.status = {
				status: action.payload.status,
				message: action.payload.message,
			};
		},
		updateLoadingStatus(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		updateIsSetOnStreaming(state, action: PayloadAction<'movie' | 'tv'>) {
			if (action.payload === 'movie') {
				state.isSetOnStreaming = true;
			}
			if (action.payload === 'tv') {
				state.isSetOnStreaming = false;
			}
		},
	},
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;

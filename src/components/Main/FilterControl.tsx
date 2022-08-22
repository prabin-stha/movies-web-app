import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store';
import { uiSliceActions } from '../../store/ui-slice';

import styles from './FilterControl.module.css';

// TODO: Make button disabled on loading state
const FilterControl: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const isSetOnStreaming = useSelector(
		(state: RootState) => state.ui.isSetOnStreaming
	);

	const streamOnClickHandler = () => {
		dispatch(uiSliceActions.updateIsSetOnStreaming('movie'));
	};

	const tvOnClickHandler = () => {
		dispatch(uiSliceActions.updateIsSetOnStreaming('tv'));
	};
	return (
		<div className={styles.filter}>
			<button
				onClick={streamOnClickHandler}
				className={`${isSetOnStreaming ? styles.active : ''} ${
					styles.streaming
				}`}
			>
				Streaming
			</button>
			<button
				onClick={tvOnClickHandler}
				className={`${!isSetOnStreaming ? styles.active : ''} ${
					styles.onTV
				}`}
			>
				On TV
			</button>
		</div>
	);
};

export default FilterControl;

import { useState } from 'react';

import styles from './FilterControl.module.css';

const FilterControl: React.FC = props => {
	const [isSetOnStreaming, setIsSetOnStreaming] = useState(true);

	const streamOnClickHandler = () => {
		setIsSetOnStreaming(true);
	};

	const tvOnClickHandler = () => {
		setIsSetOnStreaming(false);
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

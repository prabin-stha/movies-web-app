import React from 'react';

import MotionPicture from '../../model/MotionPicture';
import MotionPictureItem from './MotionPictureItem';

import styles from './MotionPictureItems.module.css';

// Question: Can we specify number of elements inside a list
const MotionPictureItems: React.FC<{ movies: MotionPicture[] }> = props => {
	return (
		<div className={styles.movieContainer}>
			{props.movies.map(function (el) {
				return (
					<MotionPictureItem
						key={el.id}
						movie={
							new MotionPicture(
								el.id,
								el.title,
								el.date,
								el.imageURL,
								el.rating
							)
						}
					/>
				);
			})}
		</div>
	);
};

export default MotionPictureItems;

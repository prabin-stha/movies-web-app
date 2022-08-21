import React from 'react';
import Movie from '../../model/Movie';
import MovieItem from './MovieItem';
import styles from './MovieItems.module.css';

const MovieItems: React.FC<{ movies: Movie[] }> = props => {
	return (
		<div className={styles.movieContainer}>
			{props.movies.map(function (el) {
				return (
					<MovieItem
						key={el.id}
						movie={
							new Movie(
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

export default MovieItems;

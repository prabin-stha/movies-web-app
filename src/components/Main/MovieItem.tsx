import fullStar from '../../img/full-star.svg';
import halfStar from '../../img/half-star.svg';
import Movie from '../../model/Movie';

import styles from './MovieItem.module.css';

const MovieItem: React.FC<{ movie: Movie }> = props => {
	const totalFullStars = Math.floor(props.movie.rating / 2);
	const hasHalfStar = props.movie.rating % 2 >= 1;
	let stars: JSX.Element[] = [];
	for (let i = 0; i < totalFullStars; i++) {
		stars.push(
			<img
				className='star'
				key={i}
				src={fullStar}
				alt='Full Star'
				height='15px'
				width='16px'
			/>
		);
	}
	if (hasHalfStar) {
		stars.push(
			<img
				key={-1}
				src={halfStar}
				alt='Half Star'
				height='15px'
				width='16px'
			/>
		);
	}

	const myStyle = {
		backgroundImage: `url(${props.movie.imageURL})`,
		height: '239px',
		width: '178px',
		backgroundSize: 'cover',
		backgroundPositionX: 'center',
		backgroundPositionY: 'center',
		backgroundRepeat: 'no-repeat',
		borderRadius: '6px',
		marginBottom: '1rem',
		boxShadow: '#00000046 0 3px 6px',
	};
	return (
		<div>
			<div style={myStyle}></div>
			<p className={styles.title}>{props.movie.title}</p>
			<p className={styles.date}>{props.movie.date}</p>
			<div className={styles.rating}>{stars}</div>
		</div>
	);
};

export default MovieItem;

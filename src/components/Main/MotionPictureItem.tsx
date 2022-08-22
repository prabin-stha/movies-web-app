import MotionPicture from '../../model/MotionPicture';

import styles from './MotionPictureItem.module.css';

import fullStar from '../../img/full-star.svg';
import halfStar from '../../img/half-star.svg';

const imageWidth = 200;
const getImageURL = (posterId: string) =>
	`https://image.tmdb.org/t/p/w${imageWidth}/${posterId}`;

const MotionPictureItem: React.FC<{ movie: MotionPicture }> = props => {
	const totalFullStars = Math.floor(props.movie.rating / 2);
	const hasHalfStar = props.movie.rating % 2 >= 1;
	// Question: Is there a more specific type for image tag
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
				key={0.5}
				src={halfStar}
				alt='Half Star'
				height='15px'
				width='16px'
			/>
		);
	}

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const dateObj = new Date(props.movie.date);

	const myStyle = {
		backgroundImage: `url(${getImageURL(props.movie.imageURL)})`,
		height: '239px',
		width: '178px',
		backgroundSize: 'cover',
		backgroundPositionX: 'center',
		backgroundPositionY: '100%',
		backgroundRepeat: 'no-repeat',
		borderRadius: '6px',
		marginBottom: '1rem',
		boxShadow: '#00000046 0 3px 6px',
	};
	return (
		<div>
			<div style={myStyle}></div>
			<p title={props.movie.title} className={styles.title}>
				{props.movie.title}
			</p>
			<p className={styles.date}>{`${
				months[dateObj.getMonth()]
			} ${dateObj.getDay()}, ${dateObj.getFullYear()}`}</p>
			<div className={styles.rating}>{stars}</div>
		</div>
	);
};

export default MotionPictureItem;

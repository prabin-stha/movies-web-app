import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../store';
import MotionPictureItem from './Main/MotionPictureItem';

import styles from './SearchComponent.module.css';

import backArrow from '../img/caret-left.svg';

const SearchComponent: React.FC = () => {
	const navigate = useNavigate();
	const { popularMovies: movies, popularTvShows: tvShows } = useSelector(
		(state: RootState) => state.movie
	);
	const newList = movies
		.reduce((acc, cur) => {
			acc.push(...cur);
			return acc;
		}, [])
		.concat(
			tvShows.reduce((acc, cur) => {
				acc.push(...cur);
				return acc;
			}, [])
		);

	return (
		<div className='container'>
			<div className={styles.home}>
				<img
					src={backArrow}
					alt='Caret Left'
					height='20px'
					width='20px'
				/>
				<a
					href='Home'
					onClick={e => {
						e.preventDefault();
						navigate('/home');
					}}
				>
					Home
				</a>
			</div>
			<div className={styles.searchResults}>
				{newList.map((el, i) => {
					return <MotionPictureItem key={i} movie={el} />;
				})}
			</div>
		</div>
	);
};

export default SearchComponent;

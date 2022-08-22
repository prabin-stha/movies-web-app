import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import FilterControl from './FilterControl';
import MotionPictureItems from './MotionPictureItems';

import styles from './Popular.module.css';

import arrowLeft from '../../img/caret-left.svg';
import arrowRight from '../../img/caret-right.svg';

const Popular: React.FC = () => {
	const { popularMovies: movies, popularTvShows: tvShows } = useSelector(
		(state: RootState) => state.movie
	);
	const isSetOnStreaming = useSelector(
		(state: RootState) => state.ui.isSetOnStreaming
	);

	// Question: Type of Component
	const [moviesMarkup, setMoviesMarkup] = useState<any>();
	const [tvMarkup, setTvMarkup] = useState<any>();

	useEffect(() => {
		setMoviesMarkup(
			movies.map((el, i) => {
				return <MotionPictureItems key={i} movies={el} />;
			})
		);
	}, [movies]);

	useEffect(() => {
		setTvMarkup(
			tvShows.map((el, i) => {
				return <MotionPictureItems key={i} movies={el} />;
			})
		);
	}, [tvShows]);

	return (
		<section>
			<div className='container'>
				<div className={styles.headingFilter}>
					<h1 className={styles.heading}>What's Popular</h1>
					<FilterControl />
				</div>
			</div>
			<div className='popularShows'>
				<Carousel
					className={styles.carousel}
					indicators={false}
					animation='slide'
					duration={500}
					autoPlay={false}
					navButtonsAlwaysVisible={true}
					navButtonsProps={{
						style: {
							height: '52px',
							width: '52px',
							backgroundColor: '#F5F5F5',
						},
					}}
					NextIcon={
						<img
							src={arrowRight}
							alt='Right Arrow'
							height='19px'
							width='11px'
						/>
					}
					PrevIcon={
						<img
							src={arrowLeft}
							alt='Left Arrow'
							height='19px'
							width='11px'
						/>
					}
					fullHeightHover={false}
				>
					{isSetOnStreaming ? moviesMarkup : tvMarkup}
				</Carousel>
			</div>
		</section>
	);
};

export default Popular;

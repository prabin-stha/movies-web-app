import Carousel from 'react-material-ui-carousel';

import Movie from '../../model/Movie';
import FilterControl from './FilterControl';
import MovieItems from './MovieItems';
import styles from './Popular.module.css';

import arrowLeft from '../../img/caret-left.svg';
import arrowRight from '../../img/caret-right.svg';

const Popular: React.FC = () => {
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
					<MovieItems
						movies={[
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.5
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
						]}
					/>
					<MovieItems
						movies={[
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
							new Movie(
								15,
								'Moonlight',
								'Feb 23, 2022',
								'https://samaantafoundation.org/wp-content/uploads/2019/04/moonlight-1080x675.jpg',
								9.65
							),
						]}
					/>
				</Carousel>
			</div>
		</section>
	);
};

export default Popular;

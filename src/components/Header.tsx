import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';

import CarouselItem from './CarouselItem';
import styles from './Header.module.css';

import { Fragment } from 'react';
import banner from '../img/banner.png';

const Header: React.FC = () => {
	const navigate = useNavigate();

	let items = [];
	for (let i = 0; i < 6; i++) {
		items.push(<CarouselItem key={i} img={banner} />);
	}

	return (
		<Fragment>
			<Carousel
				animation='slide'
				duration={400}
				interval={5000}
				swipe={false}
				navButtonsAlwaysInvisible={false}
				indicatorIconButtonProps={{
					style: {
						padding: '0px',
						height: '12px',
						width: '12px',
						margin: '0 5px',
						backgroundColor: '#86827e',
						color: 'transparent',
						transitionDuration: '400ms',
						transitionProperty: 'width, border-radius',
					},
				}}
				activeIndicatorIconButtonProps={{
					style: {
						width: '26px',
						backgroundColor: '#ffffff',
						borderRadius: '30px',
					},
				}}
				indicatorContainerProps={{
					style: {
						zIndex: 1,
						position: 'absolute',
						bottom: '20px',
						marginTop: '0',
						overflow: 'hidden',
					},
				}}
			>
				{items}
			</Carousel>
			<div className={styles.heading}>
				<h1 className={`unselectable ${styles.welcome}`}>
					Welcome to the weekend watch
				</h1>
				<h2 className={`unselectable ${styles.subHeading}`}>
					Millions of Movies, TV Shows and many more
				</h2>
				<div className={styles.searchBox}>
					<input
						placeholder='Search for movie, tv shows, and person'
						className={styles.search}
						type='text'
					/>
					<button
						onClick={() => {
							navigate('/search');
						}}
						className={styles.searchButton}
					>
						Search
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Header;

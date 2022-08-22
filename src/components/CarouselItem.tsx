import styles from './CarouselItem.module.css';

const CarouselItem: React.FC<{ img: string }> = props => {
	const myStyle = {
		backgroundImage: `url(${props.img})`,
		height: '500px',
		backgroundSize: 'cover',
		backgroundPositionX: '55%',
		backgroundPositionY: 'center',
		backgroundRepeat: 'no-repeat',
	};

	return <div className={styles.imageContainer} style={myStyle}></div>;
};

export default CarouselItem;

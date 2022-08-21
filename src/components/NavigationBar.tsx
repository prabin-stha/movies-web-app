import styles from './NavigationBar.module.css';

import logo from '../img/logo.svg';
import search from '../img/search.svg';

const NavigationBar: React.FC = () => {
	return (
		<nav>
			<div className={`container ${styles.navContainer}`}>
				<div className={styles.leftNav}>
					<img src={logo} alt='Logo' height='29px' width='132px' />
					<ul className={styles.leftLinks}>
						<li>Movies</li>
						<li>TV Show</li>
						<li>People</li>
						<li>More</li>
					</ul>
				</div>
				<div className={styles.rightNav}>
					<ul className={styles.rightLinks}>
						<li>Log In</li>
						<li>Join Us</li>
						<li>
							<img
								src={search}
								alt='Search Icon'
								height='21px'
								width='21px'
							/>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;

import styles from './Footer.module.css';

import footerLogo from '../img/footer-logo.svg';
import indiaFlag from '../img/india-flag.png';
import location from '../img/location.svg';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className={styles.footerNavigations}>
				<div className={`container ${styles.footerTopContainer}`}>
					<div className={styles.footerDescription}>
						<img
							src={footerLogo}
							alt='Logo'
							width='266px'
							height='61px'
						/>
						<div className={styles.location}>
							<img
								src={location}
								alt='Location SVG'
								height='25px'
								width='19px'
							/>
							<address className={styles.address}>
								24, Vaishnavi Centre, Raja Park, 51, Dhanana,
								Panipat, Haryana, Pincode-154419
							</address>
						</div>
					</div>
					<div className={styles.footerLinks}>
						<ul className={styles.footerLink}>
							<li>
								<h3 className={styles.linkHeading}>
									THE BASICS
								</h3>
							</li>
							<li>About Weekend Watch</li>
							<li>Contact Us</li>
							<li>Support</li>
							<li>API</li>
						</ul>

						<ul className={styles.footerLink}>
							<li>
								<h3 className={styles.linkHeading}>
									GET INVOLVED
								</h3>
							</li>
							<li>Contribution Guideline</li>
							<li>Add New Movie</li>
							<li>Add New TV Show</li>
						</ul>

						<ul className={styles.footerLink}>
							<li>
								<h3 className={styles.linkHeading}>
									COMMUNITY
								</h3>
							</li>
							<li>Guidelines</li>
							<li>Discussions</li>
							<li>Leaderboard</li>
							<li>Twitter</li>
						</ul>

						<ul className={styles.footerLink}>
							<li>
								<h3 className={styles.linkHeading}>LEGAL</h3>
							</li>
							<li>Terms of Use</li>
							<li>API Terms of Use</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.footerTextLang}>
				<div className={`container ${styles.footerBottomContainer}`}>
					<p className={styles.footerText}>
						© 2022 STAR. All Rights Reserved. Weekend watch’s all
						related Movies and TV Shoes are part of copyright.
					</p>
					<div className={styles.footerLang}>
						<img
							src={indiaFlag}
							alt='Indian Flag'
							height='19px'
							width='19px'
						/>
						<select className={styles.select} name='lang' id='lang'>
							<option value='India'>India</option>
						</select>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

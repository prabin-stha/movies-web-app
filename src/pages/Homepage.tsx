import { Fragment } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Popular from '../components/Main/Popular';

const Homepage: React.FC = () => {
	return (
		<Fragment>
			<NavigationBar />
			<Header />
			<main>
				<Popular />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Homepage;

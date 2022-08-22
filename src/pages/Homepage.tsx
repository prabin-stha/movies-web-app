import { Fragment } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Popular from '../components/Main/Popular';
import NavigationBar from '../components/NavigationBar';

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

import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import SearchItem from './pages/SearchItem';

function App() {
	return (
		<Routes>
			<Route path='/home' element={<Homepage />} />
			<Route path='*' element={<Navigate to='/home' replace={true} />} />
			<Route path='/search' element={<Search />} />
			<Route path='/search/:searchId' element={<SearchItem />} />
		</Routes>
	);
}

export default App;

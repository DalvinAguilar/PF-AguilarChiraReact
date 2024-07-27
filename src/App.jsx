import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ErrorPage from './components/ErrorPage/ErrorPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/item/:id' element={<ItemDetailContainer />} />
				<Route path='/category/:category' element={<ItemListContainer />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

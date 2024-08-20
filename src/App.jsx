import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CheckOut from './components/CheckOut/CheckOut';
import ErrorPage from './components/ErrorPage/ErrorPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './components/Context/CartContext';

function App() {
	return (
		<div>
			<CartProvider>
				<BrowserRouter>
					<NavBar />

					<Routes>
						<Route path='/' element={<ItemListContainer />} />
						<Route path='/item/:id' element={<ItemDetailContainer />} />
						<Route
							path='/category/:category'
							element={<ItemListContainer />}
						/>
						<Route path='*' element={<ErrorPage />} />
						<Route path='/checkout' element={<CheckOut />} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}

export default App;

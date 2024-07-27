import { useEffect, useState } from 'react';
import ItemList from './ItemLis';
import { getData } from '../../helpers/getData';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
	const [products, setProducts] = useState([]);

	const category = useParams().category;

	useEffect(() => {
		getData().then((res) => {
			if (category) {
				setProducts(res.filter((prod) => prod.category === category));
			} else {
				setProducts(res);
			}
		});
	}, [category]);

	return (
		<section className='products-container'>
			<h2>Our Products</h2>
			<div className='container'>
				{products ? <ItemList products={products} /> : <p>Loading...</p>}
			</div>
		</section>
	);
}

export default ItemListContainer;

import { useEffect, useState } from 'react';
import ItemList from './ItemLis';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/data';

function ItemListContainer() {
	const [products, setProducts] = useState([]);

	const category = useParams().category;

	useEffect(() => {
		const productsRef = collection(db, 'products');

		const q = category
			? query(productsRef, where('category', '==', category))
			: productsRef;

		getDocs(q).then((resp) => {
			setProducts(
				resp.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				})
			);
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

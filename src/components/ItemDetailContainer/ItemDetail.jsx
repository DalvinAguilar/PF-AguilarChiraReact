import React, { useContext } from 'react';
import './ItemDetailContainer.css';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { CartContex } from '../Context/CartContext';

function ItemDetail({ item }) {
	const [count, setCount] = useState(1);

	const { cart, addToCart } = useContext(CartContex);
	console.log(cart);

	function handleRest() {
		count > 1 && setCount(count - 1);
	}

	function handleSum() {
		count < item.stock && setCount(count + 1);
	}

	return (
		<article className='item-detail'>
			<div className='item-detail-image'>
				<img src={item.image} alt={item.title} />
			</div>
			<div className='item-detail-info'>
				<h2>{item.title}</h2>
				<p className='item-detail-description'>{item.description}</p>
				<h4 className='item-detail-category'>Category: {item.category}</h4>
				<h3 className='item-detail-price'>Price: ${item.price}</h3>
				<ItemCount
					count={count}
					handleSum={handleSum}
					handleRest={handleRest}
					handleAdd={() => {
						addToCart(item, count);
					}}
				/>
			</div>
		</article>
	);
}

export default ItemDetail;

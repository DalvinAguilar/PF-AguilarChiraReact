import React from 'react';
import { Link } from 'react-router-dom';

function Item({ prod }) {
	return (
		<article className='product-card'>
			<img src={prod.image} />
			<div className='product-info'>
				<h3>{prod.title}</h3>
				<h4>Category: {prod.category}</h4>
				<h4>Price: ${prod.price}</h4>
				<Link className='more-info' to={`/item/${prod.id}`}>
					More datails
				</Link>
			</div>
		</article>
	);
}

export default Item;

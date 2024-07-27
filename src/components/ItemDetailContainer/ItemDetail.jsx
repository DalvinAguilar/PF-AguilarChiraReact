import React from 'react';
import './ItemDetailContainer.css'; // Make sure to create and import the CSS file

function ItemDetail({ item }) {
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
				<button className='add-to-cart-button'>Add to cart</button>
			</div>
		</article>
	);
}

export default ItemDetail;

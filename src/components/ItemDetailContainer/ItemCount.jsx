import './ItemDetailContainer.css';

function ItemCount({ count, handleSum, handleRest, handleAdd }) {
	return (
		<div>
			<div className='item-count'>
				<button onClick={handleRest}>-</button>
				<p>{count}</p>
				<button onClick={handleSum}>+</button>
			</div>
			<button className='add-to-cart-button' onClick={handleAdd}>
				Add to cart
			</button>
		</div>
	);
}

export default ItemCount;

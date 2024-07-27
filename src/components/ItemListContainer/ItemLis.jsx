import './ItemListContainer.css';
import Item from './Item';

function ItemLis({ products }) {
	return (
		<div className='item-container'>
			{products.map((prod) => (
				<Item key={prod.id} prod={prod} />
			))}
		</div>
	);
}

export default ItemLis;

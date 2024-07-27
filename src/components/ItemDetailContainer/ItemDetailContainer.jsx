import { useEffect, useState } from 'react';
import { getId } from '../../helpers/getData';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
	const [item, setItem] = useState(null);
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		getId(Number(id)).then((res) => {
			setItem(res);
		});
	}, [id]);

	return (
		<div className='item-detail-container'>
			{item ? <ItemDetail item={item} /> : <p>Loading...</p>}
		</div>
	);
}

export default ItemDetailContainer;

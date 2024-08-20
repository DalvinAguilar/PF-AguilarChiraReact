import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/data';

function ItemDetailContainer() {
	const [item, setItem] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const docRef = doc(db, 'products', id);
		getDoc(docRef).then((resp) => {
			setItem({ ...resp.data(), id: resp.id });
		});
	}, [id]);

	return (
		<div className='item-detail-container'>
			{item ? <ItemDetail item={item} /> : <p>Loading...</p>}
		</div>
	);
}

export default ItemDetailContainer;

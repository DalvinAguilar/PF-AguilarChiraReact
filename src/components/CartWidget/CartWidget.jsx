import { FaShoppingBag } from 'react-icons/fa';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContex } from '../Context/CartContext';

function CartWidget() {
	const { cartCount } = useContext(CartContex);

	return (
		<div className='cart-wrapper'>
			<FaShoppingBag size='40px' />
			<span className='cart-badge'>{cartCount()}</span>
		</div>
	);
}

export default CartWidget;

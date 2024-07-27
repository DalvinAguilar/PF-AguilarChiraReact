import { FaShoppingBag } from 'react-icons/fa';
import './CartWidget.css';

function CartWidget() {
	return (
		<div className='cart-wrapper'>
			<FaShoppingBag size='40px' />
			<span className='cart-badge'>1</span>
		</div>
	);
}

export default CartWidget;

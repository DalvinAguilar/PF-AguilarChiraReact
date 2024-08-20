import React, { useContext } from 'react';
import { CartContex } from '../Context/CartContext';
import './CheckOut.css';

const CheckoutPage = () => {
	const { cart, totalPrice, clearCart } = useContext(CartContex);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (cart.length > 0) {
			alert('Purchase completed successfully!');
			clearCart();
		} else {
			alert('Please choose some products');
		}
	};

	return (
		<div className='container'>
			<h1>CheckOut</h1>

			<div className='checkout-container'>
				<div className='cart-summary'>
					<h1>Your Cart</h1>
					{cart.length === 0 ? (
						<p>Your cart is empty.</p>
					) : (
						cart.map((item) => (
							<div key={item.id} className='cart-item'>
								<h2>{item.title}</h2>
								<p>Price per unit: ${item.price}</p>
								<p>Quantity: {item.count}</p>
								<p>Total: ${item.price * item.count}</p>
							</div>
						))
					)}
					<h2>Total price: ${totalPrice()}</h2>
					<button className='clear-cart-button' onClick={clearCart}>
						Clear Cart
					</button>
				</div>

				<div className='checkout-form-container'>
					<form className='checkout-form' onSubmit={handleSubmit}>
						<h1>Checkout</h1>
						<div className='form-group'>
							<label htmlFor='fullName'>Full Name</label>
							<input
								type='text'
								id='fullName'
								name='fullName'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input type='email' id='email' name='email' required />
						</div>
						<div className='form-group'>
							<label htmlFor='address'>Delivery Address</label>
							<input
								type='text'
								id='address'
								name='address'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='paymentMethod'>Payment Method</label>
							<select id='paymentMethod' name='paymentMethod' required>
								<option value=''>Select a method</option>
								<option value='creditCard'>Credit Card</option>
								<option value='paypal'>PayPal</option>
								<option value='bankTransfer'>Bank Transfer</option>
							</select>
						</div>
						<button type='submit' className='checkout-button'>
							Complete Purchase
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CheckoutPage;

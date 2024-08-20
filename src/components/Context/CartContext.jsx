import { createContext, useEffect, useState } from 'react';

const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

export const CartContex = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(cartStorage);

	function addToCart(item, count) {
		const itemAdded = { ...item, count };

		const itemCart = [...cart];

		const inTheCart = itemCart.find((item) => item.id === itemAdded.id);

		if (inTheCart) {
			inTheCart.count = inTheCart.count + count;
		} else {
			itemCart.push(itemAdded);
		}
		setCart(itemCart);
	}

	function cartCount() {
		return cart.reduce((acc, item) => acc + item.count, 0);
	}

	function totalPrice() {
		return cart.reduce((acc, item) => acc + item.price * item.count, 0);
	}

	function clearCart() {
		setCart([]);
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContex.Provider
			value={{
				cart,
				addToCart,
				cartCount,
				totalPrice,
				clearCart,
			}}>
			{children}
		</CartContex.Provider>
	);
};

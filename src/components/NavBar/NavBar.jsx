import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className='nav-container'>
			<h1 className='nav-logo'>
				<Link to='/'>
					Chamo's <span>Shop</span>
				</Link>
			</h1>

			<ul className='nav-menu'>
				<li className='nav-menu-link'>
					<Link to='/'>Home</Link>
				</li>
				<li className='nav-menu-link'>
					<Link to='/category/mens'>Men's</Link>
				</li>
				<li className='nav-menu-link'>
					<Link to='/category/womens'>Women's</Link>
				</li>
				<li className='nav-menu-link'>
					<Link to='/category/electronic'>Electronic</Link>
				</li>
				<li className='nav-menu-link'>
					<Link to='/category/jewelry'>Jewelry</Link>
				</li>
			</ul>
			<Link to='/checkout'>
				<CartWidget />
			</Link>
		</nav>
	);
}

export default NavBar;

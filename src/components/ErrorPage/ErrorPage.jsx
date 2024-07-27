import './ErrorPage.css'; // Make sure to create and import the CSS file

function ErrorPage() {
	return (
		<div className='error-page'>
			<h1>404</h1>
			<p>Page Not Found</p>
			<a href='/'>Go back to Home</a>
		</div>
	);
}

export default ErrorPage;

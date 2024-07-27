import data from '../data/data.json';

export const getData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});
};

export const getId = (id) => {
	return new Promise((resolve, reject) => {
		const item = data.find((el) => el.id === id);

		if (item) {
			resolve(item);
		} else {
			reject({
				error: 'Product not found',
			});
		}
	});
};

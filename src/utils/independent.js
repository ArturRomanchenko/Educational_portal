import axios from 'axios';

export const fetchIndependent = async () => {
	const res = await axios.get('/api/independent.json');
	return res.data;
};

import axios from 'axios';

export const fetchPractice = async () => {
	const res = await axios.get('/api/practice.json');
	return res.data;
};

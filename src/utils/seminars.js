import axios from 'axios';

export const fetchSeminars = async () => {
	const res = await axios.get('/api/seminars.json');
	return res.data;
};

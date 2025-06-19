import axios from 'axios';

export const fetchLectures= async () => {
	const res = await axios.get('/api/lectures.json');
	return res.data;
};

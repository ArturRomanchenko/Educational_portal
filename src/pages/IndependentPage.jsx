import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchIndependent } from '../utils/independent';

const IndependentPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadData() {
			try {
				const result = await fetchIndependent();
				setData(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		loadData();
	}, []);

	if (loading) {
		return <div>Завантаження...</div>;
	}
	if (error) {
		return <div>Помилка: {error.message}</div>;
	}

	return (
		<div className='flex flex-col justify-start mb-10'>
			<h2 className='text-center text-[#1A1A1A] font-bold xl:text-5xl lg:text-2xl md:text-xl sm:text-base mb-5'>
				Самостійні роботи
			</h2>
			<ul className='flex flex-col gap-5 items-start'>
				{data.map(independent => (
					<li key={independent.id}>
						<Link
							to={`/documents/independent/${independent.id}`}
							className='flex flex-row items-center gap-2'
						>
							<h3 className='text-[#0056D2] xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold cursor-pointer hover:text-[#003B8E] transition-all'>
								{independent.title}
							</h3>
							{independent.theme && (
								<p className='xl:text-[21px] lg:text-base md:text-sm sm:text-xs text-center font-bold text-[#3f73bc]'>
									Тема: {independent.theme}
								</p>
							)}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default IndependentPage;
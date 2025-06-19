import { useEffect, useState } from 'react';
import { fetchSeminars } from '../utils/seminars';

const SeminarPage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadData() {
			try {
				const result = await fetchSeminars();
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
				Семінарські заняття
			</h2>
			<ul className='flex flex-col gap-5 items-start'>
				{data.map(seminar => (
					<li key={seminar.id}>
						<a
							href={seminar.test}
							target='_blank'
							rel='noopener noreferrer'
							className='flex flex-row items-center gap-2'
						>
							<h3 className='text-[#0056D2] xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold cursor-pointer hover:text-[#003B8E] transition-all'>
								{seminar.title}
							</h3>
							{seminar.theme && (
								<p className='xl:text-[21px] lg:text-base md:text-sm sm:text-xs text-center font-bold text-[#3f73bc]'>
									Тема: {seminar.theme}
								</p>
							)}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SeminarPage;

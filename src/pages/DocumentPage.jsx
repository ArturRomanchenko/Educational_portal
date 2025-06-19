import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIndependent } from '../utils/independent';
import { fetchLectures } from '../utils/lectures';
import { fetchPractice } from '../utils/practice';
import { fetchSeminars } from '../utils/seminars';

const loaders = {
	practice: fetchPractice,
	independent: fetchIndependent,
	seminars: fetchSeminars,
	lecture: fetchLectures,
};

const DocumentPage = () => {
	const { type, id } = useParams();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const load = loaders[type];
		if (!load) {
			setError({ message: 'Невідомий тип документа' });
			setLoading(false);
			return;
		}

		async function loadData() {
			try {
				const result = await load();
				const item = result.find(doc => doc.id === id);
				if (!item) {
					setError({ message: 'Документ не знайдено' });
				} else {
					setData(item);
				}
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}

		loadData();
	}, [type, id]);

	if (loading) return <div>Завантаження...</div>;
	if (error || !data) return <div>Помилка: {error.message}</div>;

	console.log(data.test, 'test');
	console.log(data.description, 'description');

	return (
		<div className='flex flex-col items-center px-5 mt-10 mb-14'>
			<h2 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-base font-bold text-center mb-4'>
				{data.title}
			</h2>
			{data.test && (
				<p className='xl:text-2xl lg:text-xl md:text-lg sm:text-base text-gray-700 mb-4'>
					<a
						href={data.test}
						className='text-blue-600 underline hover:text-blue-800 transition-colors duration-300 '
						target='_blank'
						rel='noopener noreferrer'
					>
						Перейти до тесту
					</a>
				</p>
			)}

			<div className='w-full max-w-6xl h-[100vh] border-sky-300  border-2 shadow-sky-300 shadow-2xl rounded-lg overflow-hidden'>
				<iframe
					src={data.link}
					className='w-full h-full border-none'
					title='PDF Document'
				/>
			</div>
		</div>
	);
};

export default DocumentPage;

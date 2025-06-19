import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className='flex justify-center items-center flex-col text-center p-[50px]'>
			<h1 className='mb-5 text-[2rem] font-bold text-[#1A1A1A]'>
				Сторінка не знайдена
			</h1>
			<Link
				to='/'
				className='mb-11 inline-block px-[10px] py-[20px] bg-emerald-400 text-lime-100 rounded-lg hover:bg-emerald-700 hover:text-lime-400 transition-colors duration-300'
			>
				Повернутися на головну
			</Link>
		</div>
	);
};

export default PageNotFound;

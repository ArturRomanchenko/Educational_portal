const About = () => {
	return (
		<div className='flex flex-col items-center justify-center  text-white text-center mt-20 mb-10'>
			<h1 className='font-bold text-[#1A1A1A] text-5xl'>Дипломний проєкт</h1>
			<h2 className='text-2xl text-[#1A1A1A] mt-5 font-medium'>
				Розробка і створення електронного підручника у вигляді вебсторінок з
				дисципліни «Інформаційні системи і технології в обліку»
			</h2>
			<p className='mt-6 text-xl font-semibold text-stone-700'>
				Виконав студент групи KI-2-21 Романченко Артур Олексійович. 2025 рік.
			</p>
			<p className='mt-2 text-xl font-semibold text-stone-700'>
				Керівник дипломного проєкту: Бахмет О.В., рецензент Рівкіна О.В.
			</p>
		</div>
	);
};

export default About;

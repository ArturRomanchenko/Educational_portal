import { useState } from 'react';

const pairsData = [
	{ term: 'BAS ERP', definition: 'Система автоматизації бухгалтерії' },
	{
		term: '1С:Підприємство',
		definition: 'Популярна програма для обліку в Україні',
	},
	{ term: 'SAP', definition: 'Глобальна ERP-система для бізнесу' },
	{ term: 'SQL', definition: 'Мова запитів до баз даних' },
];

const shuffleArray = array => {
	return array
		.map(item => ({ item, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ item }) => item);
};

const MatchPairsGame = () => {
	const [definitions, setDefinitions] = useState(() =>
		shuffleArray(pairsData.map(p => p.definition))
	);
	const [selectedTermIndex, setSelectedTermIndex] = useState(null);
	const [matchedPairs, setMatchedPairs] = useState([]);
	const [matchedDefs, setMatchedDefs] = useState([]);
	const [message, setMessage] = useState('');

	const handleTermClick = index => {
		if (matchedPairs.includes(index)) return;
		setSelectedTermIndex(index);
		setMessage('');
	};

	const handleDefinitionClick = index => {
		if (selectedTermIndex === null) return;
		if (matchedDefs.includes(index)) return;

		const term = pairsData[selectedTermIndex].term;
		const correctDefinition = pairsData[selectedTermIndex].definition;
		const clickedDefinition = definitions[index];

		if (correctDefinition === clickedDefinition) {
			setMatchedPairs(prev => [...prev, selectedTermIndex]);
			setMatchedDefs(prev => [...prev, index]);
			setMessage('Правильно!');

			if (matchedPairs.length + 1 === pairsData.length) {
				setMessage('Вітаємо! Ви правильно сопоставили всі пари!');
			}
		} else {
			setMessage('Неправильно, спробуйте ще раз');
		}
		setSelectedTermIndex(null);
	};

	return (
		<div className='max-w-xl mx-auto p-4'>
			<h2 className='text-2xl font-semibold mb-4'>
				Паралельне порівняння: співставте термін з визначенням
			</h2>
			<div className='flex gap-10'>
				<div className='w-1/2'>
					<h3 className='font-bold mb-2'>Терміни</h3>
					<ul>
						{pairsData.map((pair, index) => (
							<li
								key={index}
								onClick={() => handleTermClick(index)}
								className={`cursor-pointer p-2 mb-2 rounded border
                  ${
										matchedPairs.includes(index)
											? 'bg-green-300 pointer-events-none'
											: ''
									}
                  ${
										selectedTermIndex === index
											? 'bg-blue-200'
											: 'hover:bg-blue-100'
									}
                `}
							>
								{pair.term}
							</li>
						))}
					</ul>
				</div>

				<div className='w-1/2'>
					<h3 className='font-bold mb-2'>Визначення</h3>
					<ul>
						{definitions.map((def, index) => (
							<li
								key={index}
								onClick={() => handleDefinitionClick(index)}
								className={`cursor-pointer p-2 mb-2 rounded border
                  ${
										matchedDefs.includes(index)
											? 'bg-green-300 pointer-events-none'
											: ''
									}
                  hover:bg-yellow-100
                `}
							>
								{def}
							</li>
						))}
					</ul>
				</div>
			</div>
			{message && (
				<div className='mt-5 text-lg font-medium text-center'>{message}</div>
			)}
		</div>
	);
};

export default MatchPairsGame;

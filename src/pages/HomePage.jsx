import { motion } from 'framer-motion';
import MatchPairsGame from '../components/MatchPairsGame';

const HomePage = () => {
	return (
		<div className='flex justify-center items-center flex-col mb-10'>
			<div className='flex flex-row gap-5 mb-10 items-center'>
				<motion.div
					className='text-left mt-5'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<motion.h1
						className='text-[#1A1A1A] font-bold xl:text-5xl lg:text-4xl mb-5 md:text-3xl sm:text-3xl text-xl'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Ласкаво просимо до сайту з навчальними матеріалами!
					</motion.h1>
					<motion.p
						className='text-[#6E6E6E] font-semibold xl:text-xl lg:text-lg md:text-base sm:text-sm mt-5'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						Тут ви знайдете лекції, практичні та самостійні роботи, а також
						інформацію про семінарські заняття.
					</motion.p>
				</motion.div>

				<motion.img
					src='./images/homeImg.png'
					alt='Home Illustration'
					className='w-full max-w-[720px] h-auto object-cover sm:max-w-[200px] md:max-w-[380px] lg:max-w-[480px] xl:max-w-[720px]'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.6 }}
				/>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<p className='font-light xl:text-xl lg:text-[18px] md:text-base sm:text-sm text-slate-600 mb-3'>
					<span className='text-black font-bold'>
						Інформаційні системи і технології в обліку
					</span>{' '}
					— це сукупність засобів, методів і процесів збору, зберігання, обробки та передачі бухгалтерської інформації з використанням комп’ютерної техніки і програмного забезпечення. Вони дозволяють автоматизувати ведення обліку, підвищити точність, швидкість і ефективність обробки фінансових даних, що сприяє прийняттю більш обґрунтованих управлінських рішень.
				</p>

				<h2 className='font-bold xl:text-xl lg:text-[18px] md:text-base sm:text-sm text-slate-600 mb-3'>
					Облікові інформаційні системи забезпечують:
				</h2>
				<motion.ul
					className='list-disc ml-5 mb-5'
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.2,
							},
						},
					}}
				>
					{[
						'автоматизацію введення та обробки даних;',
						'формування фінансової звітності;',
						'аналітику діяльності підприємства в реальному часі;',
						'безпечне зберігання та передачу бухгалтерської інформації.',
					].map((item, i) => (
						<motion.li
							key={i}
							className='xl:text-lg lg:text-base md:text-sm sm:text-[12px]'
							variants={{
								hidden: { opacity: 0, x: -20 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							{item}
						</motion.li>
					))}
				</motion.ul>
			</motion.div>

			<motion.div
				className='flex flex-col items-center mt-5 mb-5'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1 }}
			>
				<MatchPairsGame />
			</motion.div>
		</div>
	);
};

export default HomePage;

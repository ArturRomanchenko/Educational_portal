import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const isActive = path => location.pathname === `/${path}`;

	const menuItems = [
		{ path: '', label: 'Головна' },
		{ path: 'lectures', label: 'Лекції' },
		{ path: 'practical', label: 'Практичні роботи' },
		{ path: 'independent', label: 'Самостійні роботи' },
		{ path: 'seminar', label: 'Семінарські заняття' },
		{ path: 'about', label: 'Про сайт' },
	];

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [isOpen]);

	return (
		<header className='mb-5 flex flex-col'>
			<nav className='flex items-center justify-between bg-sky-200 p-2 relative z-50'>
				<Link
					to='/'
					className='font-bold text-sky-950 text-lg lg:text-xl'
					onClick={() => setIsOpen(false)}
				>
					Навчальний портал
				</Link>

				<button
					className='lg:hidden focus:outline-none'
					onClick={() => setIsOpen(!isOpen)}
					aria-label='Toggle menu'
				>
					<svg
						className='w-6 h-6 text-sky-950'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						viewBox='0 0 24 24'
					>
						{isOpen ? (
							<path d='M6 18L18 6M6 6l12 12' />
						) : (
							<>
								<line x1='3' y1='12' x2='21' y2='12' />
								<line x1='3' y1='6' x2='21' y2='6' />
								<line x1='3' y1='18' x2='21' y2='18' />
							</>
						)}
					</svg>
				</button>

				{isOpen && (
					<div className='fixed inset-0 z-40 bg-sky-200 flex flex-col gap-4 p-6'>
						<ul>
							{menuItems.map(({ path, label }) => (
								<li
									key={path}
									className={`rounded-md px-2 py-2 cursor-pointer transition-all text-sky-700 ${
										isActive(path)
											? 'bg-sky-700 text-white font-bold'
											: 'hover:text-sky-500 hover:bg-white/70'
									}`}
									onClick={() => setIsOpen(false)}
								>
									<Link to={`/${path}`}>
										<span className='font-bold text-lg'>{label}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}

				<ul className='hidden lg:flex lg:flex-row lg:gap-4'>
					{menuItems.map(({ path, label }) => (
						<li
							key={path}
							className={`rounded-md px-2 py-2 cursor-pointer transition-all text-sky-700 ${
								isActive(path)
									? 'bg-sky-700 text-white font-bold'
									: 'hover:text-sky-500 hover:bg-white/70'
							}`}
						>
							<Link to={`/${path}`}>
								<span className='font-bold xl:text-[18px] lg:text-base'>
									{label}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;

import { VscGithub } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='w-full bg-sky-200  text-center py-4'>
			<div className='flex flex-col gap-1 items-center justify-center'>
				<ul className='flex flex-row gap-4 px-10'>
					<li className='text-slate-600  font-bold hover:text-gray-950 transition-colors duration-300 xl:text-5xl lg:text-2xl md:text-xl sm:text-base'>
						<a
							className='flex gap-1 items-center md:text-[14px]'
							href='https://github.com/ArturRomanchenko'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub <VscGithub className='w-[24px] h-[24px]' />
						</a>
					</li>
					<li className='text-slate-600  font-bold hover:text-gray-950 transition-colors duration-300 xl:text-base  lg:text-2xl md:text-xl sm:text-base'>
						<Link className='items-center ' to='about'>
							Про Сайт
						</Link>
					</li>
				</ul>
				<p className='text-sm md:text-base'>© 2025</p>
			</div>
		</footer>
	);
};

export default Footer;

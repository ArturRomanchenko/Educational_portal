import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow container'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default App;

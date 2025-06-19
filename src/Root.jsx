// src/root.tsx (или root.jsx)
import {
	Navigate,
	Route,
	BrowserRouter as Router, // можно заменить на HashRouter для GitHub Pages
	Routes,
} from 'react-router-dom';

import App from './App';
import PageNotFound from './components/PageNotFound';
import About from './pages/About';
import DocumentPage from './pages/DocumentPage';
import HomePage from './pages/HomePage';
import IndependentPage from './pages/IndependentPage';
import LecturesPage from './pages/LecturesPage';
import PracticalPage from './pages/PracticalPage';
import SeminarPage from './pages/SeminarPage';

export const Root = () => (
	<Router>
		<Routes>
			<Route path='/' element={<App />}>
				{/* Главная страница */}
				<Route index element={<HomePage />} />
				{/* Редирект со /home на / */}
				<Route path='home' element={<Navigate to='/' replace />} />
				Основные маршруты
				<Route path='lectures' element={<LecturesPage />} />
				<Route path='practical' element={<PracticalPage />} />
				<Route path='independent' element={<IndependentPage />} />
				<Route path='seminar' element={<SeminarPage />} />
				<Route path='about' element={<About />} />
				<Route path='/documents/:type/:id' element={<DocumentPage />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	</Router>
);

export default Root;

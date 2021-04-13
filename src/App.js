import { Route } from 'react-router-dom';
import './App.css';
import Movie from './component/Movie';
import Review from './component/Review';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Movie} />
			<Route path='/' component={Review} />
		</div>
	);
}

export default App;

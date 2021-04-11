import { Route } from 'react-router-dom';
import './App.css';
import Movie from './component/Movie';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Movie} />
		</div>
	);
}

export default App;

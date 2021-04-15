import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Movie from './component/Movie';
import Review from './component/Review';
import request from '../src/request';

function App() {
	const [movieOption, setMovieOption] = useState(request.fetchDiscovery);
	return (
		<div className='App'>
			{/* <Route exact path='/movie' component={Movie} /> */}
			<Movie movieOption={movieOption} />
			<Route exact path='/review' component={Review} />
		</div>
	);
}

export default App;

import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Movie from './component/Movie';
import Review from './component/Review';
import request from '../src/request';
import Favorite from './component/Favorite';

function App() {
	const [movieOption, setMovieOption] = useState(request.fetchDiscovery);
	return (
		<div className='App'>
			
			{/* <Route exact path='/movie' component={Movie} /> */}
			<Movie movieOption={movieOption} />
			<Switch>
			<Route exact path='/review' component={Review} />
			<Route exact path='/Favorite' component={Favorite} />
			</Switch>
		</div>
	);
}

export default App;

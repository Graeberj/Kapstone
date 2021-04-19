import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Movie from './component/Movie';
import Review from './component/Review';
import request from '../src/request';
import { Header } from './stories/Header';
import Favorite from './component/Favorite';

function App() {
	const [movieOption, setMovieOption] = useState(request.fetchDiscovery);
	return (
		<div className='App'>
			<Header />
			{/* <Route exact path='/movie' component={Movie} /> */}
			<Switch>
				<Route path='/favorite' component={Favorite} />
				<Route path='/review' component={Review} />
				<Route path='/movie' component={Movie} />
				<Movie movieOption={movieOption} />
			</Switch>
		</div>
	);
}

export default App;

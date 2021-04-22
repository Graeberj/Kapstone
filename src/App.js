import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Movie from './component/Movie';
import Review from './component/Review';
import request from '../src/request';
import { Header } from './stories/Header';
import Favorite from './component/Favorite';
import MovieDetail from './component/MovieDetail';

function App() {

	const [movieOption, setMovieOption] = useState(request.fetchDiscovery);
	return (
		<div className='App'>
			<Header />

			<Switch>
				<Route path='/favorite' component={Favorite} />
				<Route path='/Reviews' component={Review} />
				<Route exact path='/'>
					<Movie movieOption={movieOption} />
				</Route>
				<Route path='/movie/:movieId' component={MovieDetail} />
			</Switch>
		</div>
	);

}

export default App;

import React, { useEffect, useState } from 'react';
import axios from '../axios';
// import Review from 'react';

function MovieDetail(movieOption) {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const requests = await axios.get(movieOption);
			setMovie(requests.data.results);
			// return requests;
			console.log(requests.data.results);
		}

		fetchData();
	}, []);

	return (
		<div>
			<h3>{movie.name}</h3>
			<div>{movie.review}</div>
			{/* <Review /> */}
		</div>
	);
}

export default MovieDetail;
